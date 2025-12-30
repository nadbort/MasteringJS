const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


const nuevoArreglo = [...meses, 'Agosto'];

console.log(nuevoArreglo);


const producto = { nombre: 'Termo acero inoxidable', precio: 300 };


const nuevoCarrito = [...carrito, producto];


console.log(nuevoCarrito);