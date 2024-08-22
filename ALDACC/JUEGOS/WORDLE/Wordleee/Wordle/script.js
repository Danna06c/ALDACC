var height = 6; //number of guesses
var width = 5; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
// var word = "SQUID";
var wordList = ["actor", "aguas", "bache", "agudo", "carro", "dados", "actuo", "firma", "fallo", "oreja", "playa", "ratas", "punto", 
    "quema", "queso", "hielo", "ellas", "datos", "islas", "reloj", "tapas", "zorro", "verde", "sabio", "remar", "sonda", "pardo", 
    "ollas", "zonas", "cajas", "frita", "gasto", "marca", "actas", "cerdo", "largo", "malta", "casas", "monte", "agudo", "metro", 
    "dagaas", "tumba", "sabia", "raspa", "velas", "selva", "punto", "ollas", "notas", "oreja", "pesca", "sonda", "zurdo", "yemas", 
    "manga", "zebra", "yendo", "tenis", "rubio", "serio", "pesca", "perro", "vacas", "odiar", "niños", "vagos", "cinco", "edita", 
    "bueno", "envio", "manga", "mirar", "almas", "andas", "ganes", "habla", "marte", "capto", "cines", "bruto", "calma", "crema", 
    "duros", "error", "islas", "monte", "aldea", "ciego", "besos", "grito", "gorra", "morir", "indio", "sabio", "regio", "tabla", 
    "salto", "mundo", "pilas", "renos", "casas", "otros", "gorro", "campo", "calma", "rabia", "nepal", "pesos", "crudo", "cajas", 
    "jalon", "libro", "bicho", "libra", "azul", "clave", "obras", "costo", "borre", "multa", "pelea", "gafas", "peras", "baños", 
    "girar", "fusil", "aldea", "odiar", "cejas", "necia", "menos", "envio", "curar", "traer", "zorra", "yogur", "soñar", "vivir", 
    "tacos", "sucio", "tonos", "paseo", "nubes", "tipos", "remar", "salir", "viajes", "ondas", "oirte", "tarde", "playa", "opera",
     "cosas", "gordo", "metro", "gorda", "rabia", "serio", "talar", "verso", "punta", "mango", "linda", "hijos", "libro", "algas", 
     "bonos", "lados", "edito", "melon", "tiras", "sanar", "lenta", "siete", "trote", "jesus", "logro", "cenas", "denso", "filas", 
     "altos","bayas", "luche", "errar", "cosas", "canas", "inflo", "solar", "naves", "falto", "divos", "natas", "grave", "malas", 
     "palma", "secar", "super", "temer", "yates", "votar", "sonda", "paseo", "poder", "secar", "velas", "pedir", "veces", "toque", 
     "vacas", "tapas", "pesos", "cenas", "avion", "canas", "habla", "juego", "medio", "naves", "multa", "baños", "logro","notas", 
     "lejos", "verde", "media", "cerdo", "besen", "caras", "marco", "calla", "poder", "redes", "santo", "verso", "traer",];
var guessList = [
    "abeto", "actor", "aguas", "agudo", "alado", "albas", "altar", "Antón", "atizo", "avala", "avión", "azul",
    "abaco", "abate", "abeja", "aboya", "abran", "abras", "abría", "acoja", "acojo", "acres", "actas", "actos", "actúo",
    "acuna", "acune", "acuso", "acusó", "acuña", "afeas", "aguda", "agudo", "alajú", "alces", "aldea", "aleja", "algas",
    "alias", "almas", "altos", "amina", "andas", "andes", "anear", "anima", "ánima", "atojo", "ayuda", "azote", "aérea",
    "añoro", "bache", "babas", "bacas", "bajes", "balas", "bebés", "belén", "Berto", "bicho", "bizco", "bueno", "buena",
    "busca", "bajos", "barre", "batas", "bates", "bayas", "bañas", "baños", "bebed", "bebes", "besen", "besos", "bojar",
    "bonos", "borre", "borra", "botad", "botes", "Bruno", "bruta", "bruto", "cabra", "cafés", "cajas", "calar", "calas",
    "calca", "calco", "calla", "calma", "camba", "campo", "canas", "cantos", "capto", "caras", "carga", "cargo", "Carlo",
    "carro", "casas", "catar", "Catar", "caída", "cejas", "Celia", "cenas", "cepas", "cerca", "cerco", "cerdo", "cerda",
    "chile", "Chile", "china", "China", "ciego", "ciega", "cinco", "cines", "cisne", "citas", "clara", "claro", "Clara",
    "clave", "clavo", "colas", "colon", "colón", "coral", "coras", "corea", "Corea", "corro", "cosas", "costo", "coste",
    "crudo", "curdo", "curda", "curar", "celta", "coger", "combo", "corsé", "crema", "cuida", "culos", "cural", "dados",
    "dagas", "datos", "daños", "danza", "dejar", "dejes", "denso", "densa", "dices", "divos", "dotes", "dunas", "dures",
    "duros", "Dubái", "enojo", "ellos", "ellas", "echas", "edito", "edita", "elevo", "emulé", "enoje", "error", "errar",
    "estás", "Elena", "emoji", "envío", "erizo", "espía", "euros", "fallo", "falto", "feria", "fetos", "fijos", "filas",
    "filia", "finca", "firma", "floto", "focos", "folla", "forma", "Frida", "frita", "frito", "freír", "fugas",
    "fumas", "fusil", "Gales", "gafas", "galas", "Galia", "galos", "ganas", "ganes", "gases", "gasto", "girar", "gerbo",
    "gordo", "gorda", "gorro", "gorra", "grave", "grava", "grito", "Gabón", "Ghana", "gemir", "güera", "güero", "hacer",
    "halos", "hasta", "harta", "harto", "heces", "hielo", "habas", "habla", "hacha", "Haití", "hijas", "hijos", "huera",
    "huero", "india", "indio", "ideas", "inflo", "islas", "India", "Ivana", "Japón", "jefas", "jefes", "jerga",
    "Josué", "juego", "jugar", "julio", "Julio", "Julia", "jadeo", "Jairo", "jalón", "jesús", "joder", "jurar",
    "Kabul", "Kenia", "kurdo", "kurda", "labia", "lacra", "lados", "Lagos", "lance", "larga", "largo", "lejos", "lenta",
    "lento", "libia", "Libia", "libro", "libra", "linda", "lindo", "logro", "loteo", "luche", "líber", "manía", "malos",
    "malas", "marca", "marco", "Marco", "Martí", "María", "Mario", "medio", "melón", "menos", "meter", "metro", "molar",
    "moler", "monte", "morir", "manco", "manca", "Macao", "Malta", "mango", "manga", "meaba", "media", "midas", "Midas",
    "Minsk", "miras", "mirar", "mirón", "mojar", "Moscú", "multa", "mundo", "nacer", "nadar", "narro", "natas", "naves",
    "necio", "necia", "niños", "notas", "nubes", "Nuria", "nabos", "nazis", "Nepal", "Níger", "ñoñez", "ñizca", "ñuzco",
    "ñoqui", "ñurdo", "ñurda", "ópera", "obras", "ocios", "ollas", "ondas", "onzas", "otros", "otras", "óvulo", "oírte",
    "oreja", "odiar", "orina", "ortos", "osito", "París", "palas", "pedir", "pelea", "pelos", "pelar", "peras", "perro",
    "perra", "pesos", "pilas", "pinto", "Pinto", "poder", "pacto", "pagar", "palma", "Palma", "Papúa", "parda", "pardo",
    "paseo", "pateo", "pecio", "penes", "peres", "pesca", "pifia", "pisco", "playa", "pleno", "poner", "prada", "punto",
    "punta", "purga", "Qatar", "queda", "quedo", "quede", "quema", "quito", "Quito", "queso", "quepa", "reloj", "rubio",
    "rubia", "rasco", "rasca", "ratas", "rasta", "ratos", "redes", "remar", "renos", "renta", "rabia", "rabos", "rabal",
    "Ramos", "ramón", "Ramón", "raspa", "recio", "recia", "regio", "regia", "resto", "rugir", "rogar", "rusia", "sabio",
    "sabia", "savia", "saber", "sacar", "salar", "salir", "selva", "sanar", "sopas", "secar", "serio", "seria", "sitúo",
    "sobar", "sonar", "subir", "sucio", "sucia", "siete", "sacra", "sajón", "salve", "salva", "salto", "salud", "Samoa",
    "santo", "santa", "sedar", "sexos", "segar", "siega", "siria", "Siria", "sobre", "solar", "sonda", "soplo", "soñar",
    "Sudán", "sueño", "suiza", "Suiza", "tabas", "tabla", "tacos", "Tania", "tapas", "tapar", "tazas", "telón", "tener",
    "tejer", "tenis", "terco", "terca", "terso", "tersa", "Texas", "tipos", "tiras", "Tirso", "todas", "todos", "tomar",
    "Tomás", "tonos", "tonto", "tonta", "toque", "torpe", "trote", "talar", "telar", "tarde", "temer", "tenia", "topar",
    "tocar", "toser", "tóner", "traer", "tumba", "Túnez", "uñoso", "uñosa", "untes", "urbes", "Uribe", "urnas", "valer",
    "vacas", "vagos", "vagas", "valor", "veces", "vedas", "velas", "velar", "vemos", "verse", "verso", "venir", "verde",
    "vigor", "vivir", "volar", "votar", "vasco", "vasca", "vasto", "vasta", "viajes", "vídeo", "weber", "wikis", "wones",
    "xolas", "Yemen", "yates", "yemas", "yendo", "yenes", "yesca", "yogur", "yugos", "zorro", "zorra", "zonas", "zurdo",
    "zurda", "zarca", "zebra", "zegrí", "zeína", "zéjel", "zocar", "zocas"];

guessList = guessList.concat(wordList);
var word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
console.log(word);

window.onload = function(){
    intialize();
}


function intialize() {

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    // Create the key board
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
            } 

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }
    

    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    //string up the guesses into the word
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); //case sensitive
    console.log(guess);

    if (!guessList.includes(guess)) {
        document.getElementById("answer").innerText = "Not in word list";
        return;
    }
    
    //start processing guess
    let correct = 0;

    let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        } 
        else {
           letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    //first iteration, check all the correct ones first
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //Is it in the correct position?
        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1; //deduct the letter count
        }

        if (correct == width) {
            gameOver = true;
        }
    }

    console.log(letterCount);
    //go again and mark which ones are present but in wrong position
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        // skip the letter if it has been marked correct
        if (!currTile.classList.contains("correct")) {
            //Is it in the word?         //make sure we don't double count
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                
                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            } // Not in the word or (was in word but letters all used up to avoid overcount)
            else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                keyTile.classList.add("absent")
            }
        }
    }

    row += 1; //start new row
    col = 0; //start at 0 for new row
}