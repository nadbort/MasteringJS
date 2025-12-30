const reproductor = {
   
   
      reproducir:  function(id) {

        console.log(`Reproduciendo cancion con el id ${id}`);

      }, 

      pausar: function() {
          
        console.log('pausando...');

      },

      borrar: function(id) {

        console.log(`Borrando cancion.. ${id}`);
      },

      playlist: function(nombre){

          
        console.log(`Nombre de la playlist es ${nombre}`);

        this.reproductorPlaylist(nombre);

      },

      reproductorPlaylist: function(playlist){
              

        console.log(`Reproduciendo playlist ${playlist}`)

      }



}


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);


reproductor.playlist('Rock alternativo');
