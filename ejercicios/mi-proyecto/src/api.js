const apiURL = 'https://jsonplaceholder.typicode.com/users';

export const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch(apiURL);
        if (!respuesta.ok) throw Error('Error en la red');
        return await respuesta.json();
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        return [];
    }
};
