const autenticado = true;

if(autenticado){

    console.log('El usuario autenticado');
}



const puntaje = 500;

function revisarPuntaje(){
   
    if(puntaje > 400){

    console.log('Buen puntaje... felecidades');
    return;

}

    if (puntaje > 300){

      console.log('Excelente!!');
      return;

    }

}

revisarPuntaje();


