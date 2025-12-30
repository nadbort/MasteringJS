const carrito = [
   

    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 1000},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 800},

]


carrito.forEach( function(producto) {
   

    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
   

} )