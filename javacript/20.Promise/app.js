/* Promise*/

let x=10;

const p=new Promise((resolve , reject) => {
    if(x===10){
        resolve('La variable es igual a 10')
    }else {
        reject('La variable  no es igual a 10')
    }
})

p.then(p=>{
    console.log(p)
}).catch(function()
{
console.log('error');
})
console.log("");

let mensaje = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve('Es es el mensaje');
    },2000);
})

mensaje.then(m =>{
    console.log(m);
}).catch(function()
{
console.log('error');
})