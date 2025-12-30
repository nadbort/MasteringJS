const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 100 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 100 },
]

const resultado = carrito.every( producto => producto.precio === 100 );

console.log(resultado);