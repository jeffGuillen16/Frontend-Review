
//aplicando sincronismo bloqueante
/* function primero(){
  console.log("PRIMERO");  
}

function segundo(){
  console.log("SEGUNDO");
}

primero();
segundo(); */



//callback-aplicando asincronismo no bloqueante
function primero(segundo){
  setTimeout(function(){
    console.log("PRIMERO");
    segundo();
  },3000);
}

function segundo(){
  console.log("SEGUNDO");
}

primero(segundo);

console.log("")

function esperarPedido(pedido){
  console.log("Esperando la entrega del pedido " + pedido)
}

function hacerPedido(esperarPedidoCall){
  let comida="hamburguesa";
  console.log("Pedido realizado: " + comida);
  esperarPedidoCall(comida);
}

hacerPedido(esperarPedido);