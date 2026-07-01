export const renderizarResultados = (cantidad) => {
    const contenedor = document.querySelector('#app');
    contenedor.innerHTML = `
        <div class= "tarjeta">
            <h1> <h2>Gestión de usuarios</h2> </h1>
            <p>La cantidad de usuarios es de: ${cantidad}</p>
        </div>
        `;
};