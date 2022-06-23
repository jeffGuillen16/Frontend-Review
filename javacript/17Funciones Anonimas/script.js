/* FUNCIONES ANONIMAS AUTOEJECUTABLES 
->Importante poner el ";" para que me separe las funciones
*/

(
function(){
    console.log("holaaaa");
}
)();

(
    function(d,w,c){
        console.log("Mi primera funcion anonima autoejecutable");
        console.log(d);
        console.log(w);
        c.log("este es el objeto console");
    }
    )(document,window,console);

    console.log("*****************************************");
    console.log("----Formas de escribir las funciones Anónimas Autoejecutables----");
    /* Formas de escribir las funciones Anónimas  Autoejecutables */

    //Clásica

    (
        function(){
            console.log("Version clasica");
        }
    )();
    
    //La crockford ( Javascript The good parts)
        ((function(){
            console.log("Version Cronckford");
        })());
    
    //Unaria 

    +function(){
        console.log("version Unaria");
    }();

    //Facebook

    !function(){
        console.log("version Facebook");
    }();