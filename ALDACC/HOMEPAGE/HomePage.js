//Preguntas Frecuentes HomePage

const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');

preguntas.forEach((pregunta)=>{
   pregunta.addEventListener('click', (e) =>{
    e.currentTarget.classList.toggle('activa');
    const respuesta = pregunta.querySelector('.respuesta');
    const alturaRealRespuesta = respuesta.scrollHeight;
    if(!respuesta.style.maxHeight){
       respuesta.style.maxHeight = alturaRealRespuesta + 'px';
    }else{
        respuesta.style.maxHeight = null;
    }

    preguntas.forEach((elemento) => {
        if(pregunta!==elemento){
            elemento.classList.remove('activa');
            elemento.querySelector('.respuesta').style.maxHeight = null;
        }
    });
   });
});

// Ventana Modal

const container = document.querySelector('.container');
const btnSingIn = document.getElementById("btn-sign-in");
const btnSingUp = document.getElementById("btn-sign-up");

btnSingIn.addEventListener('click',()=>{
   container.classList.remove("toggle");
});

btnSingUp.addEventListener('click',()=>{
    container.classList.add("toggle");
});


                    