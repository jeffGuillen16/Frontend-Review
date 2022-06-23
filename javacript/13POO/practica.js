//----------------------Prototipo de un objeto---------------------------------------------------------
/*
Javascript esta construido con prototipos pero en vez de esto usamos clases por que a partir del 2015 
el standar ECM6 lo pide como regla , ademas funciona con node js pero la orientacion a objetos en javascript
es basado en prototipos no en clases , javascript lo compila las clases y lo transforma en protipos
Tiene la capacidad de heredar los atributos y metodos (Propiedades)de un objeto.
 */


//----------------------------------------Objetos literales -------------------------------------------------
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
        console.log("Holaaaa este es mi camino")
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

    //Agregas los metodos fuera de la funcion constructura para que esten dentro de 
    // del prototipo del objeto y no dentro de la instancia de objeto

  //Metodos
Animal.prototype.sonar=function(){
        console.log("Suenaaaa");
    }

//Instanciamos el objeto
const ballena=new Animal("willi",20);
console.log(ballena);
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


//-------------------------
function Alumno2(nombre ,edad){
    this.nombre=nombre;
    this.edad=edad;
}

Alumno2.prototype.hablar=function(){
    console.log("Holaaa como estasss")
}

const jeferson=new Alumno2("jeff",23);