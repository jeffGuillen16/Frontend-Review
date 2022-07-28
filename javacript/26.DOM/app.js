/* DOM -> DOCUMENT OBJECT MODEL "ES UNA API" 
    NODO EN EL DOM : Es cualquier etiqueta del cuerpo, como un parrafo,
    el mismo body o incluso las etiquetas de una lista . Con javascript podemos
    modificar estas etiquetas con el uso de eventos.
*/

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName("usuario"))
console.log(document.getElementById("usu"));

/* querySelector -> reemplaza a todos los selector getElements)*/
console.log(document.querySelector("#usu"));
console.log(document.querySelector("li"));
console.log(document.querySelectorAll("li"));