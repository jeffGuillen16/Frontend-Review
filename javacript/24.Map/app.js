/* Estructura de Datos coleccionables */
let mapa=new Map();
mapa.set("nombre","jeff");
mapa.set("apellido","guillen");
mapa.set("edad",25);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"))
console.log("nombre");

for(let[key,value]of mapa){
    console.log(`Llave : ${key},Valor${value}`)
}