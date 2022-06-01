//-----------Prototipo de un objeto------------------
/*
Javascript esta construido con prototipos pero en vez de esto usamos clases por que a partir del 2015 
el standar ECM6 lo pide como regla , ademas funciona con node js pero la orientacion a objetos en javascript
es basado en prototipos no en clases , javascript lo compila las clases y lo transforma en protipos
Tiene la capacidad de heredar los atributos y metodos (Propiedades)de un objeto.
 */


//-------------Objetos literales ------------
/*
Ventajas :
-> Una nueva forma de ver objetos

Contras:
->Debes insertar dentro de los objetos literales los datos
supongamos que tenemos los datos de varios alumnos entonces 
debemos hacer varios alumno con nombre y legajos distintos.

*/

//Ejemplo:
const alumno={
    nombre:"jeferson",
    legajo:1689400,
    estudia:function(){
        console.log("Estoy en tercer año XD")
    }};
    const alumno1={
        nombre:"cami",
        legajo:1689400,
        estudia:function(){
            console.log("Estoy en tercer año XD")
        }};
console.log(alumno);
alumno.estudia();
console.log(alumno1);

//----------------------Funcion constructora-----------------------------//
/*
Dentro de la funcion constructura van solo atributos
*/
function Animal(nombre,edad){
    //Atributos
    this.nombre=nombre;
    this.edad=edad;
    }

    //Agregas los metodo fuera de la funcion constructura para que esten dentro de 
    // del prototipo del objeto y no dentro de la instancia de objeto

  //Metodos
Animal.prototype.sonar=function(){
        console.log("Suenaaaa");
    }

//Instanciamos el objeto
const ballena=new Animal("willi",20);
ballena.sonar();

/*----------------- Herencia Protipica-----------*/

function Perro(nombre, edad , genero){
    this.super=Animal;
    this.super(nombre,edad);
    this.genero=genero;
}

//Perro esta heredando de animal

Perro.prototype=Animal;
Perro.prototype.constructor=Perro;

Perro.prototype.habilidad=function(){
    console.log("Perro salta XD");
}

const loli=new Perro("loli",3 , "hembra");
console.log(loli);

//********************************* CREAR SOLUCIONES*******/

/* 
Cofla entro a una tienda que vende celulares porque le parecio
bastante bueno comprarse un nuevo celular. De todos los modelos que hay 
disponibles en esa tienda, a cofla le llamaron la atención 3 telefonos especificamente,
el problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente 
nada , pero clar: el antes de comprar celulares quiere ver las cualidades y comportamientos de cada uno para 
poder comprarlos , ahi entramos nosotros
 */

/*
CREAR SOLUCIONES
-Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares
-Cada celular debe tener color , peso , resolución de pantalla , resolución de camara y memoria ram 
-Cada celular debe poder prender , reiniciar , apagar , tomar fotos y grabar
*/

class celulares {
    constructor(color,peso,rp,rc,ram){
        this.color=color;
        this.peso=peso;
        this.resolucionPantalla=rp;
        this.resolucionCamara=rm;
        this.memoriaRam=ram;
    }

}