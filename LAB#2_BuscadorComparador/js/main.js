const token = "token_prueba";
let temporizador = null;
let controladorActual = null;
let equipoA = null;
let equipoB = null;
const input = document.querySelector("#inputBusquedaEquipos");

input.addEventListener("input", function () {
  clearTimeout(temporizador);
  temporizador = setTimeout(function () {
    buscarEquipos(input.value);
  }, 400);
});
async function buscarEquipos(texto) {
  if (texto.trim() === "") {
    document.querySelector("#dropdownEquipos").innerHTML = "";
    return;
  }
  if (controladorActual !== null) {
    controladorActual.abort();
  }
  controladorActual = new AbortController();
  try {
    const respuesta = await fetch("https://worldcup26.ir/get/teams", {
      headers: { "Authorization": "Bearer " + token },
      signal: controladorActual.signal
    });

    const datos = await respuesta.json();
    const equipos = datos.teams;
    const filtrados = equipos.filter(function (equipo) {
      return equipo.name_en.toLowerCase().includes(texto.toLowerCase());
    });

    mostrarSugerencias(filtrados);

  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Petición cancelada (normal)");
    } else {
      console.error("Error real:", error);
    }
  }
}
function mostrarSugerencias(equipos) {
  const contenedor = document.querySelector("#dropdownEquipos");
  contenedor.innerHTML = "";
  if (equipos.length === 0) {
    const mensaje = document.createElement("li");
    mensaje.textContent = "No hay equipos que coincidan con la busqueda";
    contenedor.appendChild(mensaje);
    return;
  }

  equipos.forEach(function (equipo) {
    const item = document.createElement("li");
    item.textContent = equipo.name_en;
    item.addEventListener("click", function () {
      seleccionarEquipo(equipo);
    })
    contenedor.appendChild(item);
  });
}
function seleccionarEquipo(equipo) {
  if (equipoA === null) {
    equipoA = equipo;
    document.querySelector("#primerEquipo").innerHTML = "";
    document.querySelector("#primerEquipo").appendChild(crearTarjeta(equipo));
  } else if (equipoB === null) {

    document.querySelector("#segundoEquipo").innerHTML = "";
    document.querySelector("#segundoEquipo").appendChild(crearTarjeta(equipo));
    equipoB = equipo;
    compararEquipos();
  } else {
    equipoA = equipo;
    equipoB = null;
    document.querySelector("#primerEquipo").innerHTML = "";
    document.querySelector("#primerEquipo").appendChild(crearTarjeta(equipo));
    document.querySelector("#segundoEquipo").innerHTML = "";
  }
  document.querySelector("#dropdownEquipos").innerHTML = "";
  input.value = "";

}
function buscarStatsEnGrupos(grupos, idEquipo) {
  // Recorrer todos los grupos buscando el equipo por su team_id
  for (const grupo of grupos) {
    const encontrado = grupo.teams.find(function (t) {
      return t.team_id === idEquipo;
    });
    if (encontrado) {
      return encontrado;   // devuelve {team_id, mp, w, l, d, gf, ga, gd, pts, ...}
    }
  }
  return null;   // no se encontró
}
async function compararEquipos() {
  try {
    const [respA, respB, respGroups] = await Promise.all([
      fetch("https://worldcup26.ir/get/team/" + equipoA._id, { headers: { "Authorization": "Bearer " + token } }),
      fetch("https://worldcup26.ir/get/team/" + equipoB._id, { headers: { "Authorization": "Bearer " + token } }),
      fetch("https://worldcup26.ir/get/groups", { headers: { "Authorization": "Bearer " + token } })
    ]);

    const [datosA, datosB, datosGroups] = await Promise.all([
      respA.json(),
      respB.json(),
      respGroups.json()
    ]);
    const statsA = buscarStatsEnGrupos(datosGroups.groups, datosA.team.id);
    const statsB = buscarStatsEnGrupos(datosGroups.groups, datosB.team.id);

    statsA.posicion = calcularPosicion(datosGroups.groups, datosA.team.id);
    statsB.posicion = calcularPosicion(datosGroups.groups, datosB.team.id);

    mostrarComparacion(datosA.team, datosB.team, statsA, statsB);
  } catch (error) {
    console.error("Error al comparar:", error);
  }
}
function mostrarComparacion(equipoA, equipoB, statsA, statsB) {
  const columnaA = document.querySelector("#primerEquipo");
  const columnaB = document.querySelector("#segundoEquipo");

  columnaA.innerHTML = "";
  columnaB.innerHTML = "";

  columnaA.appendChild(crearTarjeta(equipoA, statsA));
  columnaB.appendChild(crearTarjeta(equipoB, statsB));
}

function crearTarjeta(equipo, stats) {
  const contenedor = document.createElement("div");

  const nombre = document.createElement("h4");
  nombre.textContent = equipo.name_en;

  const bandera = document.createElement("img");
  bandera.src = equipo.flag;

  const codigo = document.createElement("p");
  codigo.textContent = "Código FIFA: " + equipo.fifa_code;

  const grupo = document.createElement("p");
  grupo.textContent = "Grupo: " + equipo.groups;

  contenedor.appendChild(nombre);
  contenedor.appendChild(bandera);
  contenedor.appendChild(codigo);
  contenedor.appendChild(grupo);

  // Solo si vienen estadísticas (en el preview no vienen)
  if (stats) {
    const pts = document.createElement("p");
    pts.textContent = "Puntos: " + stats.pts;

    const pj = document.createElement("p");
    pj.textContent = "Partidos jugados: " + stats.mp;

    const record = document.createElement("p");
    record.textContent = "V-E-D: " + stats.w + "-" + stats.d + "-" + stats.l;

    const goles = document.createElement("p");
    goles.textContent = "Goles: " + stats.gf + " a favor, " + stats.ga + " en contra (dif " + stats.gd + ")";
    const posición = document.createElement("p");
    posición.textContent = "Posición en el grupo: " + stats.posicion;

    contenedor.appendChild(posición);
    contenedor.appendChild(pts);
    contenedor.appendChild(pj);
    contenedor.appendChild(record);
    contenedor.appendChild(goles);
  }
  return contenedor;
}

function calcularPosicion(grupos, idEquipo) {
  for (const grupo of grupos) {
    const estaAca = grupo.teams.some(function (t) {
      return t.team_id === idEquipo;
    });
    if (estaAca) {
      const ordenados = [...grupo.teams].sort(function (a, b) {
        if (Number(b.pts) !== Number(a.pts)) {
          return Number(b.pts) - Number(a.pts);   // más puntos primero
        }
        return Number(b.gd) - Number(a.gd);        // desempate: mejor diferencia primero
      });

      // Encontrar la posición de nuestro equipo en el array ordenado
      const indice = ordenados.findIndex(function (t) {
        return t.team_id === idEquipo;
      });

      return indice + 1;   // posición = índice + 1 (índice 0 = 1er lugar)
    }
  }
  return null;
}