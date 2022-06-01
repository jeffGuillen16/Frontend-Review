/* ---------------Clases-------------------- */
// Las clases no poseen parametros
class Animal{
    //El constructuctor es un metodo especial que se ejecuta
    //en el momento de instanciar una clase
    constructor(nombre,genero){
        this.nombre=nombre;
        this.genero=genero;
    }
    //Metodos
    sonar(){
        console.log("Hago sonidos por que estoy vivo");
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);   
    }
}

const mimi=new Animal("mimi", "hembra");
const scooby=new Animal("scooby", "macho");

console.log(mimi);
console.log(scooby);