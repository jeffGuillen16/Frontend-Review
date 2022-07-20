let id=Symbol("id");
let id2=Symbol("id2");
console.log(typeof id , typeof id2);

const NAME = Symbol();

const persona ={
    [NAME]:"Jeff"
}

console.log(persona);

persona.Nombre="Jeferson Guillen";
console.log(persona);