/* Complete the 'makeItBark' function below
*The function is expected to return a STRING
*The function accepts STRING name as parameter
*/
function makeItBark(name){
    function Dog(name){
        this.name=name;
    }
    Dog.prototype.bark=function(){
        return this.name + ' says woof hey';
    }
    const scooby=new Dog(name);
    return console.log(scooby.bark());
}
makeItBark("boby");