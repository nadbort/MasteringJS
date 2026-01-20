localStorage.removeItem('nombre');


//Agregar nueva propiedad a objeto
const objectoProducto = JSON.parse(localStorage.getItem('Producto'));
console.log(objectoProducto);

objectoProducto.fabricacion = 'China';

console.log(objectoProducto);

localStorage.setItem('Producto', JSON.stringify(objectoProducto));