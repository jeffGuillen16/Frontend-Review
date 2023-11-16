/*               Manipulando el DOM desde Javascript              */

//Metodos del DOM o funciones que nos permiten manipular el HTML desde Javascript

//innerHtml terpreta y renderiza HTML (Tiene problemas de bulnerabilidad ya que nos permite modificar el HTML de la pagina 
const h2 = document.querySelector('h2');
h2.innerHTML = "<Manipulando el DOM desde Javascript <br> <small>Modificando el contenido de un elemento HTML</small>";

//innerText trata el contenido como texto sin procesar html
const h3 = document.querySelector('h3');
h3.innerText = "<br>Manipulando el DOM desde Javascript <br> <small>Modificando el contenido de un elemento HTML</small>";

//getAttribute nos permite a leer los elementos que tienen nuestros atributos
console.log(h2.getAttribute('class'));

//setAtrribute nos permite modificar los elementos que tienen nuestros atributos
h2.setAttribute('class', 'titulo');

//classList nos permite agregar o quitar clases a un elemento
h2.classList.add('rojo');
h2.classList.remove('titulo');

// h1.classList.toggle('verde');está utilizando el método toggle para alternar la presencia de la clase 'verde'. Si la clase 'verde' ya está presente, la quita; si no está presente, la agrega.
// h1.classList.contains('verde'); En este caso, classList.contains('verde') devuelve true si la clase 'verde' está presente en el elemento h1, y false si no lo está.

//input Modificar valores de los inputs
const input = document.querySelector('input');
input.value = "Nuevo valor";