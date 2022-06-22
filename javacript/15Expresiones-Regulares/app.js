/* Expresiones Regulares 
    Son una secuencia de caracteres que forma un patrón de 
    busqueda , principalmente utilizada para la busqueda de patrones
    de cadena de caractes.        

*/
let cadena = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus at saepe beatae, aut dolorum adipisci quaerat expedita reiciendis magnam eius quod veniam culpa aliquid rerum praesentium officia aliquam. Placeat, animi."

let expReg = new RegExp("Lorem","");
let expReg2 = /lorem/;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));