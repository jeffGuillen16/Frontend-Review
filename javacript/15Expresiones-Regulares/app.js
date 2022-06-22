/* Expresiones Regulares 
    Son una secuencia de caracteres que forma un patrón de 
    busqueda , principalmente utilizada para la busqueda de patrones
    de cadena de caractes.        
    Las expresiones Regulares sirven para validar datos por ejemplo para validar un DNI , los 16
    digitos de una tarjeta para saber si es visa o mastercard,etc 
*/
let cadena = "Lorem ipsum dolor sit amet, loremconsectetur adipisicing elit. Ducimus at saepe beatae,Lorem aut dolorum adipisci quaerat expedita reiciendis magnam eius quodlorem veniam culpa aliquid rerum praesentium officia aliquam. Placeat, animi."
let expReg = new RegExp("lorem","ig");//g traeme todos los lorem
let expReg2 = /lorem/ig;

console.log(expReg.test(cadena));//Probar de que la expresion regular exista dentro de esa cadena
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));


/*
Banderas
-i ignora entre mayusculas y minusculas 
-ig agarra todas 
*/