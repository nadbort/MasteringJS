class Cliente {
   
    constructor(nombre, saldo){

        this.nombre = nombre;
        this.saldo = saldo
    }


    mostrarInformacion(){

        return `Cliente: ${this.nombre} tiene un saldo de ${this.saldo}`;

    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

//Herencia

class Empresa extends Cliente {

    constructor(nombre, saldo, telefono, categoria){

        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

}


const empresa = new Empresa('Kobok', 10000, 3186563019, 'Robotica');

console.log(empresa)