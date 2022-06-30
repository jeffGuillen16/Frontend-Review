 //callback

function modify(array, callback){
  //hacemos algo...
  array.push('midu')
  //despues de hacer algo..
setTimeout(function(){ callback(array)},3000)
}

const names=['gartiel','vedaskies','tomimelo']

modify(names,function(array){
  console.log(`he modificado el array y ahora es de ${ array.length } elementos!`)
})