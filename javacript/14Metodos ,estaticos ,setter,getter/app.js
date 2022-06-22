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

/*Herencia */

class Perro extends Animal {
    constructor(nombre, genero , tamanio){
        //con el metodo super() manda al  el constructor de la clase padre
        super(nombre , genero);
        this.tamanio=tamanio;
    }
    sonar(){
        console.log("soy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("gua gua");
    }
/* Metodo estatico -> Se puede ejecutar sin necesidad de instanciar una clase */
    static correr(){
        console.log("correeee")
    };

//get sirve para retornar el dato 
    get getRaza(){
        return this.raza;
    }
//Set -> Sirve para  insertar datos al atributo
    set setRaza(raza){
        this.raza=raza;
    }
}

Perro.correr();//-> metodo estatic
const mimi=new Animal("mimi", "hembra");
const scooby=new Perro("scooby", "macho");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.ladrar();
scooby.saludar();
scooby.sonar();
console.log(scooby.getRaza);
scooby.setRaza="doberman";//->metodo set
console.log(scooby.getRaza);//->metodo get OUTPUT:raza



