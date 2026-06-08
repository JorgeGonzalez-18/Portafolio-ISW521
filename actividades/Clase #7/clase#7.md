# CLASE 7 #
transform: permite cambiar la posicion en coordenadas de un elemento

# ACTIVIDAD #1 #
1. ¿Qué le pasa al float: left de .item-a cuando se activa display: flex?

float no aplica a hijos de contenedore flexible entonces el .item-a se posiciona segun flexbox, por defecto

2. ¿Por qué el display: inline de .item-b ya no importa dentro del flex container?

al ser un item flex, el navegador calcula de forma automatica un valor de display, un contenedor flex se bloquifica, lo que ignora el valor display original si es inline.
ademas, vertical-align top pierde efecto sobre los flex items 
el display declarado en el hijo es sobrescrito 

3. ¿El margin-top: -20px de .item-c produce margin collapsing igual que en flujo normal?

el colapso de margenes no ocurre en flex items

# ACTIVIDAD #2 # 
En que eje actua cada propiedad?

propiedad          |  Con row: actua en?  |                 
justify-content ---> eje horizontal(main),eje vertical(main)
                   |
align-items --->    eje horizontal(transversal), eje vertical(transversal)
                   |
flex-basis ---> eje horizontal(width inicial), eje horizontal(height inicial)
                   |
width: 200px ---> eje horizontal(main), eje horizontal(main)


# ACTIVIDAD #3 #
codigo ejemplo
.toolbar {
    display: flex;
    flex-direction: column; /* "para ordenar" */
    justify-content: flex-end; /* "quería botones a la derecha" */
    align-items: center; /* "quería centrado vertical" */
    height: 80px;
}

1. Con flex-direction: column, ¿justify-content: flex-end mueve los botones a la derecha o hacia abajo?
- los mueve hacia abajo 

2. ¿Qué eje controla align-items cuando la dirección es column?
- Controla el eje tranversal/horizontal, eje x

3. ¿Cómo corriges el CSS para que los botones queden a la derecha y centrados verticalmente?
- cambiar el flex-direction: column; por un felx-direction: row;
- invertir propiedades de justify-content: y align-items 

codigo solucion
.toolbar {
    display: flex;
    flex-direction: column;     /* Eje principal: Vertical | Eje transversal: Horizontal */
    justify-content: center;    /* Centra los botones verticalmente (Eje Principal) */
    align-items: flex-end;      /* Empuja los botones a la derecha (Eje Transversal) */
    height: 80px;
}


# ACTIVIDAD #4 #

.galeria {
    display: flex;
    width: 600px;
    height: 300px;
    align-content: space-between; /* "parece no tener efecto" */
}

.card {
    width: 150px;
    height: 100px;
}

1. ¿Cuál es la propiedad que falta para que align-content tenga efecto visual?
- falta la propiedad flex-wrap: wrap

2. ¿Qué propiedad de alineación SÍ podría estar actuando aquí aunque align-content no haga nada?
- align-items

3. .galeria {
    display: flex;
    flex-wrap: wrap;              /* Permite la creación de múltiples líneas */
    width: 600px;
    height: 300px;
    gap: 10px;
    align-content: space-between; /* Distribuye las líneas: la primera arriba y la segunda abajo */
}

.card {
    width: 150px;
    height: 100px;
}