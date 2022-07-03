function cuadradoPromise(value){
    if(typeof value!== "number" ) {
        return Promise.reject(`Error , el valor "${value}" 
        ingresado no es un número `);
    }
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                value:value,
                result:value*value
            });
        },0|Math.random()*1000);
    });
}
    async function funcionAsincronaDeclarada(){
        try {
            console.log("Inicio Aync Function");
            let obj=await cuadradoPromise(0);
            console.log(`Async Function:${obj.value},${obj.result}`);
            
            
            obj=await cuadradoPromise(1);
            console.log(`Async Function:${obj.value},${obj.result}`);
            
            
            obj=await cuadradoPromise(2);
            console.log(`Async Function:${obj.value},${obj.result}`);
            
            
            obj=await cuadradoPromise(3);
            console.log(`Async Function:${obj.value},${obj.result}`);
            console.log("Fin Async Function");
        }
        catch(error){
            console.error(err);
        }
    }
funcionAsincronaDeclarada();