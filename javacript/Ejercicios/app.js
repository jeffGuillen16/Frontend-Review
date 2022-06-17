
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/*
function contador(a){
let i;
for (i = 0; i < a.length; i++) {
result = i;
}
console.log(i);
}
let a = "Hola mundo";
let result;
contador(a);

// 2) Programa una función que te devuelva el texto
// recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
let texto = "hola mundo"; 
let textCut=[];
function returnText (text,b){
for(let i=0;i<b;i++){
textCut += text[i]; //textoCut= + "h"
}
console.log(textCut);
}
let b=4;
returnText(texto,b);

*/
// 3) Programa una función que dada una String te devuelva un Array de textos separados por 
//cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
let devolver=[] ;
function miFuncion(x,f) {
 
  for (let i = 0; i < x.length; i++)
  {
  if (x[i]!=' ' ){ //H
      f += x[i]; 
      console.log(f);       //[Hola]
    } 
     if(x[i]==' ' || (i== (x.length-1) )) {
      devolver.push(f);
      f='';
     console.log(i);
     console.log("****Reinicia****");
    }

} 
console.log(devolver)
}
let x ='hola que tal';
let f='';

miFuncion(x,f);