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


const producto3 = {

  nombre: "Teclado",
  precio: 50

}

const producto4 = {

  nombre: "Audifonos",
  precio: 100

}


let resultado;

resultado = [...carrito, producto, producto2, producto3, producto4];


resultado.splice(3, 3);





console.table(resultado);
