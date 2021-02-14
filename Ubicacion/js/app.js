let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

//Menu responsive
btnMenu.addEventListener('click', () => {

    //Intercalar entre menu hamburguesa y simbolo de cerrar
    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    //Animación del menú
    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;
    } else {
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";

        activador = true;
    }

});

// INTERCALAR CLASE ACTIVE
let enlaces = document.querySelectorAll('.lists li a'); //almacenamos en fomra de arreglo los contenidos de las listas

//REcorrer elementos
enlaces.forEach( (element) => {

    element.addEventListener('click', (event) => {

        enlaces.forEach( (link) => {
            link.classList.remove('active');
        });

        event.target.classList.add('active');

    });

});