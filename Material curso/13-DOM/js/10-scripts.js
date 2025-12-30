const enlace = document.createElement('A');

enlace.textContent = 'Nuevo Enlace';

enlace.href = '/nuevo-enlace';

enlace.target = '_blank';

console.log(enlace);


const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(enlace);