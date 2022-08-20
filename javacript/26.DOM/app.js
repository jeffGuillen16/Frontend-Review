/* DOM -> DOCUMENT OBJECT MODEL "ES UNA API" 
    NODO EN EL DOM : Es cualquier etiqueta del cuerpo, como un parrafo,
    el mismo body o incluso las etiquetas de una lista . Con javascript podemos
    modificar estas etiquetas con el uso de eventos.
*/
/* ############################Selectore########################## */
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

/* #################Atributos#################################### */
document.documentElement.lang="en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

/* $linkDOM -> variable de tipo elemento html (buena practica ponerlo
    con "$") */
const $linkDOM=document.querySelector(".link-dom");
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://www.youtube.com/watch?v=Wv2rLZmbPMA&list=RDWv2rLZmbPMA&start_radio=1");
console.log($linkDOM.hasAttribute("rel"));//Tiene rel
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

/* ##################### Data-Attributes##########################*/
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);