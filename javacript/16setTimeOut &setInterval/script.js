/* TEMPORIZADORES SON FUNCIONES DEL OBJETO WINDOW */

/* setTimeout(arow function,milisegundos)
->En cuantos milisegundos va aparece este acción
*/
console.log("inicio");
setTimeout(() => {
    let contador=0;
    console.log("Ejecutando un setTimeOut este se ejecuta una sola vez");
}, 3000 ); 

/* setTimeinterval(arrow function,milisegundo) 
->Cada cuantos segundos va hacer esta instrucción*/

/* setInterval(()=>{
    console.log("hola hola hola")
},3000) */

console.log("---------------------------------");
let temporizador=setInterval(()=>{
    console.log(new Date().toLocaleTimeString());
},1000);

let temporizador2=setTimeout(()=>{
    console.log("hola");
},3000)
/* 
clearTimeout(temporizador); 
clearInterval(temporizador2);
*/