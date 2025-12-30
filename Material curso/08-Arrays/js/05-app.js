const carrito = [];

//Definir un producto
const producto = {

   nombre: "Monitor 32 pulgadas",
   precio: 400

}

const producto2 = {

  nombre: 'Celular',
  precio: 800

}


let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];


console.log(resultado);

