//total de pregunta del juego
const TOTAL_PREGUNTAS = 10;

// variable que me lleva la cantidad de respuestas acertadas
var cantidadAcertadas = 0;

// variable para controlar la pregunta actual, comienza en -1 porque la primera pregunta es la 0
var numPreguntaActual = -1;

// estructura para saber que pregunta se ha respondido y cual no
// lo vamos a mantener en un arreglo , i: 0 indica que no se ha respondido, 1 indica que si la respondio.
// se coloco la cantidad de las preguntas 
var estadoPreguntas =[0,0,0,0,0,0,0,0,0,0];



// creamos la base de datos de preguntas
const bd_juegos =[
    {
        id:'A',
        pregunta:"Son palabras que tienen significados opuestos",
        respuesta:"antonimos"
    },
    {
        id:'B',
        pregunta:"Qué término se utiliza para describir una obra literaria que relata la vida de una persona, generalmente importante, escrita por otra persona",
        respuesta:"biografia"
    },
    {
        id:'C',
        pregunta:"Cómo se llama el género literario que se caracteriza por la narración de sucesos reales de forma objetiva y documentada",
        respuesta:"cronica"
    },
    {
        id:'D',
        pregunta:"Cuál es el término que se refiere a la acción de cambiar la posición de los elementos de una oración sin alterar su significado",
        respuesta:"dislocacion"
    },
    {
        id:'E',
        pregunta:"Qué término se utiliza para describir la acción de escribir o redactar un texto",
        respuesta:"escritura"
    },
    {
        id:'F',
        pregunta:"Cómo se llama el género literario que se caracteriza por la narración de sucesos reales de forma objetiva y documentada",
        respuesta:"farsa"
    },
    {
        id:'G',
        pregunta:"Qué término se utiliza para describir la acción de escribir o redactar un texto",
        respuesta:"glosa"
    },
    {
        id:'H',
        pregunta:"Cómo se llama el género literario que se caracteriza por la narración de sucesos reales de forma objetiva y documentada",
        respuesta:"historia"
    },
    {
        id:'I',
        pregunta:"Qué término se utiliza para describir la acción de escribir o redactar un texto",
        respuesta:"ironia"
    },
    {
        id:'J',
        pregunta:"Cómo se llama el género literario que se caracteriza por la narración de sucesos reales de forma objetiva y documentada",
        respuesta:"jerga"
    }
]

// variables para controlar el tiempo
const timer = document.getElementById("tiempo");
// tiempo del juego en segundos
const TIEMPO_DEL_JUEGO = 60;
// variable que indica el tiempo restante
let timeLeft = TIEMPO_DEL_JUEGO;
// variable que maneja el contador
var countdown;

//creamos la letras de la a la A la J de forma circular
const container = document.querySelector(".container");
for(let i=1; i <= TOTAL_PREGUNTAS; i++){
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = String.fromCharCode(i + 96);
    circle.id = String.fromCharCode(i + 96).toUpperCase();
    container.appendChild(circle);

    const angle = ((i-1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI /2);
    const x = Math.round(95 + 120 * Math.cos(angle));
    const y = Math.round(95 + 120 * Math.sin(angle));
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

// boton comenzar
var comenzar = document.getElementById("comenzar");
comenzar.addEventListener("click", function(event){
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";

// largamos el tiempo
largarTiempo();
cargarPregunta();
})

function largarTiempo(){
    countdown = setInterval(()=> {
        // restar un segundo al tiempo restante
        timeLeft--;
        // actualizamos el texto del cronometro con el tiempo restante 
        timer.innerText = timeLeft;

        // si el tiempo llega a 0, dtener cronometro
        if(timeLeft<0){
            clearInterval(countdown);
            // alert("se acabo el tiempo");
             mostrarPantallaFinal();
        }
    },1000);
}

// funcion para cargar la pregunta
function cargarPregunta(){
numPreguntaActual++;
// si llegamos al final del juego, mostrar la pantalla final, para iniciar de nuevo
if(numPreguntaActual >= TOTAL_PREGUNTAS){
    numPreguntaActual = 0;
}

// debo controlar que todavia hallan preguntas para contestar
// ver si el arreglo de estadoPreguntas tiene o existe un 0
if(estadoPreguntas.indexOf(0) >=0){
//ahora buscar cual de todas las preguntas no se ha respondido, buscar el primer 0 del arreglo
while(estadoPreguntas[numPreguntaActual]==1){
    numPreguntaActual++;
    if(numPreguntaActual >= TOTAL_PREGUNTAS){
        numPreguntaActual = 0;
    }
}

// ahora si se busaca la pregunta en la base de datos
 document.getElementById("letra-pregunta").textContent = bd_juegos[numPreguntaActual].id;
 document.getElementById("pregunta").textContent = bd_juegos[numPreguntaActual].pregunta;
 var letra = bd_juegos[numPreguntaActual].id;
 document.getElementById(letra).classList.add("pregunta-actual");
}else{
    clearInterval(countdown);
    mostrarPantallaFinal()
}
}


// detectar cada vez que haya un cambio en el input para ver cuando presiona enter
// y controlar si lo que ingreso es correcto o no.
var respuesta = document.getElementById("respuesta");
respuesta.addEventListener("keyup", function(event){
    //detecto si se presiono enter 
    if(event.keyCode ===13){
        if(respuesta.value==""){  //si presiono enter y esta vacio 
        alert("Debe ingresar un valor");
        return;
        }

        // obtengo la respuesta ingresada
        var txtRespuesta = respuesta.value;
        controlarRespuesta(txtRespuesta.toLowerCase());

    }
})

function controlarRespuesta(txtRespuesta){
    // controlar si la respuesta es correcta
    if(txtRespuesta == bd_juegos[numPreguntaActual].respuesta){
        // alert("Respuesta correcta");
        cantidadAcertadas++;

        // actualizo el estado de las preguntas actual a 1, para indicar que ya esta respondida
        estadoPreguntas[numPreguntaActual] = 1;

        var letra = bd_juegos[numPreguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById(letra).classList.add("bien-respondida");
    }else{
    estadoPreguntas[numPreguntaActual] = 1;
    var letra = bd_juegos[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    document.getElementById(letra).classList.add("mal-respondida");
}
//  limpiar el input
respuesta.value = "";
// cargar la siguiente pregunta
cargarPregunta();
}

// boton para pasar pregunta sin contestar
var pasar = document.getElementById("pasar");
pasar.addEventListener("click", function(event){
    var letra = bd_juegos[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");

    cargarPregunta();
})

// muestro la pantalla final
function mostrarPantallaFinal(){
    document.getElementById("acertadas").textContent = cantidadAcertadas;
    document.getElementById("score").textContent = (cantidadAcertadas*100)/10 + "% de acierto";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
}

// boton para reiniciar el juego
var reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function(event){
    numPreguntaActual = -1;
    timeLeft = TIEMPO_DEL_JUEGO;
    timer.innerText = timeLeft;
    cantidadAcertadas = 0;
    estadoPreguntas =[0,0,0,0,0,0,0,0,0,0];

    // quito las clases de los circulos
    var circulos = document.getElementsByClassName("circle");
    for (i=0; i<circulos.length;i++){
        circulos[i].classList.remove("pregunta-actual");
        circulos[i].classList.remove("bien-respondida");
        circulos[i].classList.remove("mal-respondida");
    }

    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    respuesta.value="";

    largarTiempo();
    cargarPregunta();
})