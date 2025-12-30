const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto', 'Septiembre', 'Octubre'];


const meses3 = meses.concat(meses2);

//Spread Operator

const resultado = [...meses, ...meses2];

console.log(resultado);