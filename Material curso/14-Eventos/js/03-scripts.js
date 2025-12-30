const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('blur', (e) => {


    if(e.target.value === ''){
       console.log('Fallo la validacion');
    }else{

        console.log('Paso la validacion')
    }
   

})