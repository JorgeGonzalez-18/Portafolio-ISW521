const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNGRmNDQ4YjMwMTVlNWJmMzFjMzA2MiIsImlhdCI6MTc4MzQ5MzcwNCwiZXhwIjoxNzkwNzUxMzA0fQ.M9I1AE9RXvXKMcgxRJCucn856WvWwAdcDQ1SzBz6BLM";
let temporizador = null;
let controladorActual = null;
let equipoA = null;
let equipoB = null;
const input = document.querySelector("#inputBusquedaEquipos");

input.addEventListener("input", function () {
  clearTimeout(temporizador);
  temporizador = setTimeout(function () {
    buscarEquipos(input.value);
  }, 400);  // ms de pausa: elegí un número entre 300 y 500
});
async function buscarEquipos(texto) {
  // 1. Cancelar la búsqueda anterior si sigue en vuelo
  if (texto.trim() === "") {
    document.querySelector("#dropdownEquipos").innerHTML = "";
    return;
  }
  if (controladorActual !== null) {
    controladorActual.abort();
  }

  // 2. Crear un controlador nuevo para ESTA búsqueda
  controladorActual = new AbortController();  // el objeto que da señal + cancelación

  try {
    const respuesta = await fetch("https://worldcup26.ir/get/teams", {
      headers: { "Authorization": "Bearer " + token },
      signal: controladorActual.signal
    });

    const datos = await respuesta.json();
    const equipos = datos.teams;

    // 3. Filtrar localmente por el texto escrito (los 48 vienen completos)
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
  } else if (equipoB === null) {
    equipoB = equipo;
    compararEquipos();
  } else {
    return;
  }
  console.log("Equipo A:", equipoA, "| Equipo B:", equipoB);

}
async function compararEquipos() {
  try {
    const [respA, respB] = await Promise.all([
      fetch("https://worldcup26.ir/get/team/" + equipoA._id, {
        headers: { "Authorization": "Bearer " + token }
      }),
      fetch("https://worldcup26.ir/get/team/" + equipoB._id, {   // ¿qué va acá?
        headers: { "Authorization": "Bearer " + token }
      })
    ]);

    // Cada respuesta todavía necesita convertirse a JSON (¿en paralelo también?)
    const [datosA, datosB] = await Promise.all([
      respA.json(),
      respB.json()   // ¿qué método?
    ]);

    mostrarComparacion(datosA.team, datosB.team);

  } catch (error) {
    console.error("Error al comparar:", error);
  }
}
function mostrarComparacion(equipoA, equipoB) {
  const columnaA = document.querySelector("#primerEquipo");
  const columnaB = document.querySelector("#segundoEquipo");

  columnaA.innerHTML = "";  // limpiar antes de renderizar
  columnaB.innerHTML = "";

  columnaA.appendChild(crearTarjeta(equipoA));
  columnaB.appendChild(crearTarjeta(equipoB));
}

function crearTarjeta(equipo) {
  const contenedor = document.createElement("div");

  const nombre = document.createElement("h4");
  nombre.textContent = equipo.name_en;   // el nombre del equipo

  const bandera = document.createElement("img");
  bandera.src = equipo.flag;          // la URL de la bandera

  const codigo = document.createElement("p");
  codigo.textContent = "Código FIFA: " + equipo.fifa_code;  // el código

  contenedor.appendChild(nombre);
  contenedor.appendChild(bandera);
  contenedor.appendChild(codigo);

  return contenedor;
}
