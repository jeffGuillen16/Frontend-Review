/* DOM -> DOCUMENT OBJECT MODEL "ES UNA API" 
    NODO EN EL DOM : Es cualquier etiqueta del cuerpo, como un parrafo,
    el mismo body o incluso las etiquetas de una lista . Con javascript podemos
    modificar estas etiquetas con el uso de eventos.

//Metodos del DOM

/*################ getElementoBy ##########
getElementsBy (por ejemplo, getElementsByClassName, getElementsByTagName):
getElementById, getElementsByClassName, getElementsByTagName, etc.`:
Estos métodos son más específicos y se centran en seleccionar elementos por su ID, clase o tipo de etiqueta.
Devuelven una colección de elementos que coinciden con el criterio de selección.
Se accede a los elementos de la colección utilizando índices o en el caso de getElementById, 
devuelve un solo elemento (ya que los IDs deben ser únicos en un documento).*/
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName("usuario"))
console.log(document.getElementById("usu"));

/*################# querySelector ##########
querySelector:

Se utiliza para seleccionar el primer elemento que coincida con un selector CSS.
Devuelve solo un elemento (el primero que encuentra).
Si no encuentra ningún elemento, devuelve null.
Puede utilizar selectores más complejos, como clases, identificadores, elementos descendientes, etc.

*/
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

