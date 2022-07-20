/*Es un arreglo mejorado de js que solo acepta valores unicos*/

const set=new Set([1,2,3,4,5,6,true,false,false,[],[],"hola","HOla"]);
console.log(set);
console.log(set.size);

const set2=new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("Recorriendo set");

for(item of set){
    console.log(item);
}

console.log("Recorriendo set2");
set2.forEach(item=>console.log(item));

/* 
No Se puede por que el set no es lo mismo que un array!!!
console.log(set[0])
;
 */

/*Conversion de los Set en un arreglo*/
let arr = Array.from(set);
console.log(arr);

/* Eliminar un dato del set */
set.delete("HOla");
console.log(set);

/* Preguntar si tiene un dato el set */
console.log(set.has("hola"));
console.log(set.has(19));


/*Limpiar set2*/
set2.clear();
console.log(set2);


