function Cliente(nombre, saldo) {

    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente.prototype.tipoCliente = function() {

    let tipo;

    if(this.saldo > 10000){
        
        tipo = 'Gold';

    }else if(this.saldo > 5000) {

       tipo = 'Platinum';

    }else{
        tipo = 'Silver';
    }

    return tipo;
}


Cliente.prototype.nombreClienteSaldo = function(){

    return `Nombre: ${this.nombre}, saldo ${this.saldo}, tipo cliente ${this.tipoCliente()}`;
}


Cliente.prototype.retiraSaldo = function(retira){

    return this.saldo -= retira;
}


function Persona(nombre, saldo, telefono){


    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;


}

Persona.prototype = Object.create( Cliente.prototype );
Persona.prototype.constructor = Cliente;


//Instanciarlo
const juan = new Persona('Juan', 10000, '3186563019');
console.log(juan);
console.log(juan.nombreClienteSaldo());