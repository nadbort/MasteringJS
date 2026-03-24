class Cliente {
   
    #nombre
    constructor(nombre, saldo){

        this.#nombre = nombre;
        this.saldo = saldo
    }


    mostrarInformacion(){

        return `Cliente: ${this.#nombre} tiene un saldo de ${this.saldo}`;

    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

const diego = new Cliente('Diego', 5000);

console.log(diego.mostrarInformacion());