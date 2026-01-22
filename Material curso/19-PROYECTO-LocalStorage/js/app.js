//Variables

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners();


//Eventos
function eventListeners() {
     
     //Cuando el usuario agrega un nuevo tweet
     formulario.addEventListener('submit', agregarTweet);


     //Cuando el documento esta listo
     document.addEventListener('DOMContentLoaded', () => {
          

        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];

        console.log(tweets);

        crearHTML();
        

     })

}

function agregarTweet(e){

    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    if(tweet === ''){

        mostrarError('Un mensaje no puede ir vacio');
        return;

    }

    //Crear objeto con tweet y al id
    const tweetObj = {

        id: Date.now(),
        tweet

    }

    //Anadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //Una vez agregado crear el HTML
    crearHTML();


    //Reiniciar el formulario
    formulario.reset();


}

function mostrarError(mensaje){

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');


    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    

    //Elimina la alerta despues de 3 segundos
    setTimeout( () => {
         
        mensajeError.remove();


    }, 3000 );

}

//Muestra el listado de los tweets

function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){

        tweets.forEach( tweet => {

            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Anadir la funcion de eliminar
            btnEliminar.onclick = () => {

                borrarTweet(tweet.id);
            }

             const li = document.createElement('li');

             //Anadir el texto
             li.innerText = tweet.tweet;

             //Anadir el boton de eliminar
             li.appendChild(btnEliminar);

             //Insertarlo en el HTML
             listaTweets.appendChild(li);

        } )
    }

    sincronizarStorage();
}

//Agrega los tweets actuales a local storage
function sincronizarStorage(){

    localStorage.setItem('tweets', JSON.stringify(tweets));
}


//Elimina un tweet
function borrarTweet(id) {
   
    tweets = tweets.filter( tweet => tweet.id != id );

    crearHTML();

}



//Limpiar el HTML

function limpiarHTML(){

    while(listaTweets.firstChild){

        listaTweets.removeChild(listaTweets.firstChild);
    }
}