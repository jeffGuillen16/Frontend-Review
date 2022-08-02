/* DOM -> DOCUMENT OBJECT MODEL "ES UNA API" 
    NODO EN EL DOM : Es cualquier etiqueta del cuerpo, como un parrafo,
    el mismo body o incluso las etiquetas de una lista . Con javascript podemos
    modificar estas etiquetas con el uso de eventos.
*/

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName("usuario"))
console.log(document.getElementById("usu"));

/* querySelector -> reemplaza a todos los selector getElements)
-> retorna el primer elemento  del selector*/
console.log(document.querySelector("#usu"));
console.log(document.querySelector("li"));
/* querySelectorAll("")*/
console.log(document.querySelectorAll("li"));

document.documentElement.lang="en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

/* $linkDOM -> variable de tipo elemento html (buena practica ponerlo
    con "$") */
const $linkDOM=document.querySelector(".link-dom");
$linkDOM.setAttribute("target","_blank");