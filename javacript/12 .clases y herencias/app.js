
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
}

const mimi=new Animal("mimi", "hembra");
const scooby=new Perro("scooby", "macho");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.ladrar();
scooby.saludar();
scooby.sonar();


/*Practica */

class Auto {
    constructor(marca, color){
        this.marca=marca;
        this.color=color;
    }

    velocidad (){
        console.log("voy rapidoooooo")
    }

    sonido(){
        console.log("tintitintintitnitntinti")
    }
}

console.log("*************Practica****************")

class camion extends Auto {
    constructor(tipo , marca , color){
        super(marca, color);
        this.tipo=tipo;
    }

    velocidad(){
        console.log("va lento")
    }
    musica(){
        console.log("cumbiaa papá")
    }
}

const ferrari=new Auto("ferrari", "red")
const fitito=new camion("fitito","camion","gris");
console.log(ferrari);
ferrari.velocidad();
ferrari.sonido();
console.log(fitito);
fitito.velocidad();
fitito.sonido();
fitito.musica();
