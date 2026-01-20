localStorage.setItem('nombre', 'Diego');


const producto = {
   
    nombre: "Monitor 24 pulgadas",
    precio: 300


}

const productoString = JSON.stringify(producto);

localStorage.setItem('Producto', productoString);