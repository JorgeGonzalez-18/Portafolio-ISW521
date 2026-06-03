id son identificadores unicos de una etiqueta
class hace que una etiqueta herede lo de esa class(define caracteristicas que pueden ser usadas por diferentes etiquetas)
ratio= contraste entre claridad y oscuridad
A= nivel de conformidad, A, AA, AAA

crawlers = rastreadores de google


:hover= cambia estilo de elemento cuando el cursor pasa sobre el, sin usar Js ni dar click
ej: cambiar color fondo de boton(oscurece), resaltar link o cambiar color o menu de navegacion 


ACTIVIDAD #2

1- este comportamiento ocurre por que el navegador no tiene una instruccion nativa para que el foco pase del ultimo elemento al primer elemento por eso al llegar al boton cancelar que es el ultimo el DOM sigue su curso hacia el siguiente elemento interactivo que en este caso se encuentra en la pagina de fondo

2- la solucion para atrapar el foco se llama focus trap y para garantizar su funcionamiento se deben seguir los siguientes pasos:
    -Identificar los limites: se necesita saber cual es el orimer y utlmimo elemento enfocable dentro del modal

    -Interceptar el teclado: escuchar el evento del teclado cuando se presiona Tab
    
    - Controlar direccion: se cancela el comportamiento por defecto si el usuario esta ubicado en el ultimo elemento y se mueve manualmente el foco hacia el primer elemento enfocable
    
    -Controlar direccion inversa: a diferencia del anterior, en este caso si el usuario esta en el primer elemento y presiona el comando, se intercepta el evento y se mueve manualmente hacia el ultimo elemento enfocable

3- Pseudo codigo interceptacion shift+tab
// 1. Seleccionar el contenedor del modal y sus elementos enfocables
const modal = document.querySelector('.modal-contenedor');
const selectorFocusables = 'a, button, input, [tabindex]';

// Conseguir la lista de todos los elementos interactivos dentro del modal
const elementosFocusables = modal.querySelectorAll(selectorFocusables);
const primerElemento = elementosFocusables[0];
const ultimoElemento = elementosFocusables[elementosFocusables.length - 1];

// 2. Escuchar el evento de teclado dentro del modal
modal.addEventListener('keydown', function(evento) {
    // Verificar si la tecla presionada es Tab
    if (evento.key === 'Tab' || evento.keyCode === 9) {
        
        // CASO A: Navegación hacia atrás (Shift + Tab)
        if (evento.shiftKey) {
            // Si el foco actual está en el primer elemento, saltamos al último
            if (document.activeElement === primerElemento) {
                ultimoElemento.focus();
                evento.preventDefault(); // Evita que el navegador use su flujo nativo
            }
        } 
        
        // CASO B: Navegación hacia adelante (Tab solo)
        else {
            // Si el foco actual está en el último elemento, saltamos al primero
            if (document.activeElement === ultimoElemento) {
                primerElemento.focus();
                evento.preventDefault(); // Evita que el navegador use su flujo nativo
            }
        }
        
    }
});

ACTIVIDAD #3

Problema 1:
Se usa un elemento generico no semantico, los eventos de teclado no responden al menos de que se genere el evento con Js.
AT: el lector de pantalla escucha que es un boton y que se puede interactuarv pero al intentar usarlo con el teclado no pasara nada 
solucion: reemplazar div por un elemento semantico como <button> y limpiar redundancia de etiquetas

Problema 2:
Redundancia de ron en etiqueta al usarse sobre un <nav>, violando la regla de oro ARIA de no usar atributos innecesarios sobre html5
AT: el lector de pantalla puede repite la misma seccion 
Solucion: Eliminar atributo role y dejar unicamente la etiqueta semantica

Problema 3: 
menu de navegacion oculto
AT: el lector ignora por completo el ID y el usuario solo escucha un sonido generico sin explicacion del elemento
solucion: quitar atributo aria-hidden del encabezado

Problema #4:
Se utiliza una region viva asertiva para un texto estatico de bienvenida, esto se reserva para alertas criticas o errores graves que requieren interrumpir al usuario. ej: su sesion va a expirar, reingrese sus credenciales
Solucion: usar un texto simple para el saludo de bienvenida

ACTIVIDAD #4
