

const metodoPago = 'efectivo';

switch(metodoPago){

    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    default:
        console.log('Aun no has seleccionado un metodo de pago');
        break;

}