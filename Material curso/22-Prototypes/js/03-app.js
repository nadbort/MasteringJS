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


//Instanciarlo
const pedro = new Cliente('Pedro', 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
console.log(pedro.retiraSaldo(5000));
console.log(pedro.nombreClienteSaldo());
