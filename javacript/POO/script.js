//-----------------------------------Prototipo de una función --------------------------------
// -> "Es una interfaz"- para proporcionar mecanismos de herencia, 
// los objetos pueden tener un objeto prototipo,  el cual actúa como un objeto plantilla que hereda métodos y propiedades.

            /*
            Clase:Modelo a seguir.
            Objetos: Es una instancia de una clase-> una instancia es una copia de un modelo a seguir
            Atributos: Es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
            Metodos: son las acciones que un objeto puede realizar(son funciones dentro de un objeto)
            */

        //objetos literal -> En objetos solo usar funciones no arrow functions
        const perro = {
            nombre:"bobi",  
            dueño:"jeff",
            //Metodos
            ladrar(){
                console.log("uau uau uau");
            }
        };
        console.info(perro);
        
        //---------------------------Función constructora -----------------------
        // -> lo ideal es que nuestras funciones constructora solo tengan los atributos
        
        // Forma no eficiente porque hay dos metodos y al instanciar un objeto ocupa memoria innecesaria las funciones
        // function Animal(nombre,edad){
        //     this.nombre=nombre;
            
        //     //Metodos
        //     this.sonar=function(){
        //         console.log("ladra");
        //     }
        //     this.saludar=function(){
        //         console.log("saludarnnj");
        //     }
        // }
        function Animal(nombre,edad){
            this.nombre=nombre;
            this.edad=edad;
            }
        Animal.prototype.saludar=function(){
                console.log("blablabla");
            }
        Animal.prototype.sonar=function(){
            console.log("uauauaua");
        }
        
        //-----------------Herencia de Prototipica---------------------
        
        //Herencia prototipica
        function Perro(nombre,edad,tamanio){
            this.super=Animal;//->Herencia
            this.super(nombre,edad);
            this.tamanio=tamanio;
        }

        
        //Perro esta heredando de animal
        Perro.prototype=new Animal();
        Perro.prototype.constructor=Perro;
        
        //Sobreescritura de métodos del prototipo padre
        //en el hijo
        
        Perro.prototype.sonar=function(){
            console.log("Soy un perro y mi sonido es un ladrido");
        }

        Perro.prototype.ladrar=function(){
            console.log("ladrido fuerte");
        }

        const camilo=new Perro("Camilo",3,"mediano"),
        lola=new Animal("lola",4);//->instancia de objeto
        
        console.log(camilo);
        console.log(lola);

        camilo.sonar();
        camilo.ladrar();

        lola.sonar();
        lola.saludar();