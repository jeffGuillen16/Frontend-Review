
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
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
 */
function contador(sentencia=""){
  if(!sentencia)
    {
return console.warn("no hay texto");
  }else{
  return console.info(`La cantidad de caracteres del texto es ${sentencia.length}`)
}
}

contador("");
contador("Hola mundo");


// 2) Programa una función que te devuelva el texto
// recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
/* 
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

const recortarTexto=(cadena="",longitud=undefined)=>
  (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
      :(longitud===undefined)
        ?console.warn("No ingresaste la longitud para recorrer el texto")
        :console.info(cadena.slice(0,longitud))//array.slice([inicio [, fin]])
  
  recortarTexto("Hola Mundo",4);
  recortarTexto();
  recortarTexto("Hola Hola");
  recortarTexto("",5);


// 3) Programa una función que dada una String te devuelva un Array de textos separados por 
//cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

/*
let devolver=[] ;
function miFuncion(x,f) {
 
  for (let i = 0; i < x.length; i++)
  {
  if (x[i]!=' ' ){ //H
      f+= x[i];   //" hola"
      console.log(f);       //[Hola]
    } 
     if(x[i]==' ' || (i==(x.length-1) )) {
      devolver.push(f);
      f='';
     console.log(i);
     console.log("****Reinicia****");
    }

} 
console.log(devolver)
}
let x ='hola san pedro de la capilla ';
let f='';
miFuncion(x,f);

*/


const sentencia = (string="", x=undefined) =>{
  (!string)
   return (string.split(x)); //string.(split(param)) : param is a condition that split this critery
  }

console.log(sentencia('hola que tal',' '));

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/* let miFuncion=(texto,cantVeces)=>{
  let text = texto,resultado='';
  for(var i=1;i<=cantVeces;i++){
    resultado+=text;
  }
  return resultado;
}

console.log(miFuncion('Hola Mundo ', 3));
 */

/* ( Operador condicional ) ternario 

(condition)? : express : express2

 */

let hi="hola",
x="hola";
(x==hi)?console.log("bienvenido") : console.log("hola")

//string.repeat(n)
const miFuncionx=(cadena="", veces=undefined) =>
  {
        if(!cadena)
          return console.warn("cadena esta vacia");
          if(veces===0) 
          return console.error("no definiste la variable");
            if(Math.sign(veces)===-1) return console.error("el numero no puede ser negativo")
            for(let x;x<cadena.length;x++) console.info(cadena)
  }          
miFuncionx("hola mundo",3);  
miFuncionx("hola mundo",0);
miFuncionx("hola mundo",0);
miFuncionx("",3);
miFuncionx("hola mundo",-2);

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */
/* A continuación se muestra lo que hará cada una de las tres funciones.
split() separará cada carácter de una cadena y lo convertirá en un array.
reverse() tomará esa matriz e invertirá los elementos dentro de ella.
join() unirá los caracteres que han sido invertidos por la función reverse(). */
const funcionInvertir=(cadena="")=>{
  (!cadena)?console.warn("La cadena esta vacia")
    : console.info(cadena.split("").reverse().join(""))
}
funcionInvertir("hola Mundo");

/* 
split-> lo separa por caracteres , los envia a un array [L a c a d e n a  e s t a  v a c i a]
reverse -> Invierte la cadena [a i c a v  a t s e  a n e d a c a L]
Join -> unira los caracteres La cadena esta vacia
*/

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

/* String.prototype.repeat()
El método repeat() construye y devuelve una nueva cadena que contiene el número 
especificado de copias de la cadena en la cual fue llamada, concatenados.
 */
const repeatWordNumber=(cadena="",textoRepeat="")=>{
  if(!cadena)  return console.warn("La cadena de texto esta vacia");
  if(!textoRepeat) return console.warn("El texto que se repite esta vacio");
  let i=0,
    contador=0;
      while(i!==-1){
        i=cadena.indexOf(textoRepeat,i);
        if(i!==-1){
          i++;
              contador++;
        }
      }
      return console.info(`La palabra ${textoRepeat} se repite
      ${contador}veces`);
      }

repeatWordNumber("","mundo");
repeatWordNumber("hola mundo adios mundo","");
repeatWordNumber("hola mundo adios mundo","mundo");


// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const getNumber=(min=Number,max=Number)=>{
  (!min)?console.warn("is Not a Number") : 
    (!max)?console.warn("is Not a Number"):
      console.info(Math.floor(Math.random()*(max-min+1)) +min);
}      

getNumber(2,5);
getNumber(501,600);


let array=["mandarina","fruta","limon"];
console.log(array.indexOf("mandarina",0))



let letra="hola como estas hey hey ";
console.log(letra.indexOf("como",));