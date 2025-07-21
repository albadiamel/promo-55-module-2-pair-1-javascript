"use strict"; /*Siempre hay que ponerlo al principio*/

console.log(">> Hola mundo!"); /*Se pone para comprobar que el .js funciona correctamente al inspeccionar la página en la vista Consola*/

/* EJERCICIOS DE LAS VARIABLES
1. Mensaje de navegador obsoleto*/
document.querySelector("h1").innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente'

//2. Hola Mundo
document.querySelector('.hola').innerHTML = 'Hola Mundo'

//3. Seleccionando Adalabers
document.querySelector(".alba").style.display = "none" /*Ponemos un estilo 'display: none' para ocultar uno de los nombres de la lista*/
document.querySelector(".eleonora").style.display = " "

//4. Lorem Ipsum
document.querySelector(".h1-lorem-ipsum").innerHTML =
'<h1>Lorem ipsum</h1>' + 
'<img src="https://books.adalab.es/materiales-programacion-web-part-time/~gitbook/image?url=https%3A%2F%2F2290520847-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252F-LBuEZZRixR4fb_QN9VF%252Fsites%252Fsite_uxWLH%252Ficon%252FB15b57esc0YaS0pc3qqM%252Fadalab-logo-128x128.png%3Falt%3Dmedia%26token%3D58a87340-5dad-4756-83f9-64054b4b6333&width=32&dpr=2&quality=100&sign=2c7eb239&sv=2" alt=imagen>' +
'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';
/*Nota: me he dado cuenta de que es mejor introducir el contenido del .innerHTML entre ' ' en lugar de " " porque si tienes que añadir " " en el código como es
el caso del src= de la img, no te va a servir si lo pones entre ""*/

//5. Arreglando errores
let myaddress = 'Las Palmas, 35460';
myaddress = 'Cantabria, 47009';

console.log(myaddress);
//Este ejercicio es solo para la vista en Consola, para ver que al añadirle otro valor a una const nos da error y hay que cambiarla de const a let


//6. Desabilitando botones
document.querySelector(".boton2").classList.add("boton-desactivado");
//document.querySelector(".boton2").classList.remove("boton2");
//document.querySelector(".boton2").style.opacity = 0.5;


/*EJERCICIOS DE LOS EVENTOS
1.¿Cómo te llamas?*/
const input = document.querySelector(".nombre");
const saludo = document.querySelector(".saludo");
const boton = document.querySelector(".boton3");

boton.addEventListener("click", () => {
    const nombre = input.value;
    saludo.innerHTML = "Hola " + nombre;
})

//2.Cambia el estilo de un botón
const botonClick = document.querySelector(".boton4");

botonClick.addEventListener("click", () => {
    botonClick.classList.toggle("botonClick");
})

//3. Dame ipsum
const loremIpsum = document.querySelector(".parrafo");

loremIpsum.addEventListener("click", () => {
    loremIpsum.innerHTML += ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vero facere! Repudiandae architecto commodi neque fuga pariatur eos atque tempora voluptatum facilis est, molestias animi. Laborum placeat saepe ipsum sed!'
}) //El += es para que el anterior contenido no se sobreescriba

//4. Información instantánea

const textoInput = document.querySelector(".texto");
const parrafo = document.querySelector(".parrafo-vacio");

textoInput.addEventListener("input", (event) => {
    parrafo.innerHTML = event.currentTarget.value;
})

//5. Estilo para un botón*/

const boton1 = document.querySelector(".boton5");
const boton2 = document.querySelector(".boton6");

boton1.addEventListener("click", () => {
    boton1.classList.toggle("botonClick")
})
boton2.addEventListener("click", () => {
    boton2.classList.toggle("botonClick")
}) //Consultar esto con Ana porque no estoy segura de que se refiera a esto con lo de usar una única función manejadora para el evento de los dos botones

//6. ¿Qué vemos esta noche?

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const start = document.querySelector(".empezar");
const lista = document.querySelector(".lista-peliculas")
const seleccion = document.querySelector(".peli-seleccionada");

start.addEventListener("click", () => {
  lista.innerHTML = '<li>' + inception + '</li>';
  lista.innerHTML += '<li>' + theButterFlyEffect + '</li>';
  lista.innerHTML += '<li>' + eternalSunshineOfTheSM + '</li>';
  lista.innerHTML += '<li>' + blueVelvet + '</li>';
  lista.innerHTML += '<li>' + split + '</li>';
})

lista.addEventListener("click", (event) => {
  const peli = event.target.textContent
  seleccion.innerHTML = "La peli seleccionada es: " + peli;
})


//EJERCICIOS DE CONDICIONALES
//1. Control de acceso

const userName = "Maria";
const isUserAllowed = userName === "Maria" || userName === "Luisa";
console.log(isUserAllowed ? "Bienvenida, " + userName : "Lo siento pero el usuario que has introducido no está registrado");


//2. Completa las condiciones

const numero = 51

if (numero === 0) {
  console.log('El número es 0')
} else if (numero < 0) {
  console.log('El número es negativo')
} else if (numero + 2 < 13 && numero >= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (numero > 20 && numero < 50) {
  console.log('El número es mayor que 20 pero menor que 50')
} else {
  console.log('el número no es 123123125')
}

// 3. Nadie sin avatar

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "https://dev.adalab.es/gato-siames.webp"; //<-- Si quitamos este se debe mostrar el avatar por defecto

const avatarImg = document.querySelector(".user__avatar").src = userAvatar || DEFAULT_AVATAR;

// 4. Conversor de edad de perro a humano
//El primer año de un perro equivale a 15 años de humano
//El segundo año de un perro equivale a nueve años de humano
//A partir del tercero, cada año de perro equivale a 5 años de humano.

// Definimos la edad del perro
const dogAge = 10;
// Creamos una variable para guardar la edad equivalente en años humanos
let humanAge = 0;

// Si el perro tiene solo 1 año
if (dogAge === 1) {
  // Ese primer año equivale a 15 años humanos
  humanAge = 15;
// Si el perro tiene 2 años
} else if (dogAge === 2) {
  // El primer año vale 15 y el segundo vale 9, total 24
  humanAge = 15 + 9;
// Si el perro tiene más de 2 años
} else {
  // Primer año: 15 años humanos
  // Segundo año: 9 años humanos
  // Cada año extra (desde el tercero en adelante) vale 5 años humanos
  // Por eso restamos 2 (porque esos ya están contados) y multiplicamos el resto por 5
  humanAge = 15 + 9 + (dogAge - 2) * 5;
}

console.log(`El perro que tiene ${dogAge} años, tiene ${humanAge} años de humano.`);

// 5. Recomendar de recetas

// Creamos una variable constante con el nombre ingredient y le vamos a dar de valores pollo, merluza, espinacas o nada
const ingredient = '' //<-- Cambiar por 'pollo', 'merluza' o 'espinacas'

// Aquí le estamos diciendo que si el ingrediente que hay en la nevera es pollo...
if (ingredient === 'pollo') {
  // ...mande este mensaje a la consola
  console.log('Tu ingrediente es pollo. Puedes freírte un filete con patatas.')
// Si el ingrediente que hay en la nevera es merluza...
} else if (ingredient === 'merluza') {
  // ...mande este mensaje a la consola
  console.log('Tu ingrediente es merluza. Puedes cocinar una merluzita en salsa verde.')
// Si el ingrediente que hay en la nevera es espinacas...
} else if (ingredient === 'espinacas'){
  // ...mande este mensaje a la consola
  console.log('Tu ingrediente es espinacas. Puedes cocinar unas espinacas rehogadas.')
// Si en la nevera no hay nada...
} else {
  // ...mande este mensaje a la consola
  console.log('Nada en la nevera.')
}

// 6. Año bisiesto

// Creamos una variable constante con el año actual
const currentYear = 2025;

// Usamos % para ver cuánto sobra al dividir el año entre 4.
// Esto nos ayuda a saber si el año es bisiesto o cuánto falta para el próximo.
const module = currentYear % 4;

// Si al dividir el año entre 4 sobra 3...
if (module === 3) {
  // ...significa que el próximo año (2026) se podrá dividir sin sobrar nada.
  // Es decir, 2026 será bisiesto.
  console.log(`El próximo año es bisiesto, el ${currentYear + 1}`)
// Si sobra 2...
} else if (module === 2) {
  // ...entonces faltan dos años para llegar a un año que sí sea bisiesto.
  // Eso sería el año 2027.
  console.log(`Dentro de dos años es bisiesto, el ${currentYear + 2}`)
  // Si sobra 1...
} else if (module === 1) {
  // ...entonces el siguiente año (2026) será bisiesto.
  // Aquí se aclara claramente: "dentro de un año".
  console.log(`Dentro de un año es bisiesto, el ${currentYear + 1}`)
// Y si no sobra nada...
} else {
  // ...eso significa que el año actual se puede dividir exactamente entre 4.
  // Por lo tanto, este mismo año es bisiesto.
  console.log("Este año es bisiesto")
}

// EJERCICIOS DE LOS DATOS
//1. "Trasteando" la consola
// Abre la consola y haz las siguientes pruebas:
// 1. Realiza una suma sencilla con nuestro número favorito y el de nuestra compañera y pulsa Intro.
// 2. Haz lo mismo, pero guardando los números en constantes y utilizando estas para sumar.

const numberEleonora = 13;
const numberAlba = 7;

const sum = 13 + 7;
console.log("Resultado de la suma:", sum);

//3. 3. El precio de la fruta
/* Imagina que vamos a la frutería y compramos lo siguiente:
2 kilos de kiwis a 5€ / kg
3 kilos de peras conferencia (no una cualquiera) a 2€ / kg
Medio kilo de uvas a 4€ / kg*/

// Calcula el precio total como si lo hiciésemos en una hoja de papel de toda la vida pero de manera mucho más guay. El resultado debe mostrarse en la consola del navegador.

const kiwis = 2 * 5;
const peras = 3 * 2;
const uvas = 0.5 * 4;

const totalPrize = kiwis + peras + uvas;
console.log("El precio total es:", totalPrize);

//4. Calcular el número total de horas que hemos vivido
// Crea un programa que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.

const totalHours = 30 * 365 * 24;
console.log("En total he vivido:", totalHours);

// 5. Lista de perretes
// Pinta tres elementos li dentro de una lista ul con la información de gatitos: un nombre y una foto, los obtendremos a partir de los siguientes datos:

const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dogList = document.querySelector(".dog-list").innerHTML = 
`<li>${firstDogName} <img src="${firstDogImage}" /></li> 
<li>${secondDogName} <img src="${secondDogImage}" /></li> 
<li>${thirdDogName} <img src="${thirdDogImage}" /></li>`

/*6. Cuántas letras tiene tu nombre
Haz el código necesario para crear un programa que pinte en HTML lo siguiente:
El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres,
remplazando Leticia Fernández Sánchez por el nombre de nuestra compañera y 23 por la longitud de la cadena con su nombre.
Nota: tendremos que guardar el nombre de nuestra compañera en una constante para poder trabajar con él.*/

const nameEleonora = "Eleonora";
console.log("Caracteres del nombre:", nameEleonora.length);

const nameLetters = document.querySelector(".name-letters").innerHTML = 
`El nombre de mi compañera es ${nameEleonora} y está compuesto por ${nameEleonora.length} caracteres`;

//2. Dayana mola
const superWave = document.querySelector(".super-wave").classList.add("styleOLA");

//const removeBackground = document.querySelector(".main").classList.remove("main");

// FUNCIONES

// 1. Multiplicación, Media y Pares

function mul(a, b) {
  console.log(a * b);
  return a * b;
}

mul(5, 9);

//

function media(a, b, c, d) {
  console.log((a + b + c + d) / 4);
  return a + b + c + d / 4;
}

media(1, 2, 3, 4);

//

function trueFalse(a) {
  if (a % 2 == 0) {
     console.log("El numero es par");
  }  else
      console.log("El numero es impar");
}

trueFalse(6);

// 2. Ticket con IVA

function price(a) {
  const priceIVA = a * 0.21
  const priceTotal = a + priceIVA
  console.log(`Precio sin IVA: ${a}, IVA: ${priceIVA} y Total: ${priceTotal}`);
  return [a, priceIVA, priceTotal];
}

price(7);

// 3. Variables globales

// modificamos una variable de ámbito global

let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"



// FUNCIONES II
// 1. Calculadora de modelo de caja

function boxCalculator(borderBox, width, padding, borderSize) {
if (borderBox) {
  const contentWidth = width - 2 * padding - 2 * borderSize;
  const totalWidth = width;
  return `El ancho del contenido es: ${contentWidth} y el ancho total de la caja es: ${totalWidth}`;
} else {
  const contentWidth = width
  const totalWidth = width + 2 * padding + 2 * borderSize;
  return `El ancho del contenido es: ${contentWidth} y el ancho total de la caja es: ${totalWidth}`;
}
}
console.log(boxCalculator(true, 100, 10, 2));


// EJERCICIO HECHO POR ANA
// A los valores booleanos se les pone is en el nombre

const calculateWidth = (isBorderBox, width, padding, border) => {
  if (isBorderBox) {
    return `El ancho del contenido es ${width}, y el ancho de la caja es ${width}`
  } else {
    const contentSize = width + padding * 2 + border * 2;
  return `El ancho del contenido es ${contentSize}, y el ancho de la caja es ${width}`
  }
};

const result = calculateWidth(false, 300, 10, 5);
console.log(result);

// 2. Contador con botón

const countButton = document.querySelector(".countButton");
const text = document.querySelector(".count");

let count = 0;

const incrementCount = () => {
  count++; // puede ser con ++ o con +1
  text.innerHTML = count;
};

countButton.addEventListener("click", incrementCount);


// EJERCICIOS DE OBJETOS
// 1. Bio de Adalabers
// Crea un objeto llamado adalaber1 con:
// Nombre: 'Susana'
// Edad: 34
// Profesión: 'periodista'

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
}

// Muestra esta frase en la consola o en la web usando las propiedades del objeto:
// Mi nombre es Susana, tengo 34 años y soy periodista

console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`);

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
}

console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`);

// 2. A la carrera
// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola la frase 'Estoy corriendo'.

adalaber1.run = () => {
  console.log("Estoy corriendo");
}

adalaber1.run();

// Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. 
// Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.

adalaber1.runAMarathon = (distance) => {
  console.log(`Estoy corriendo un maratón de ${distance} kilometros`);
}

adalaber1.runAMarathon(50);

// 3. Bio de Adalabers 2
// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 
// 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.

adalaber1.name = "María";

adalaber1.showBio = () => {
  console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`);
}

adalaber1.showBio();

adalaber2.showBio = () => {
  console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`);
}

adalaber2.showBio();

// 5. Estructura de datos para un usuario
// Crea un objeto para almacenar la información de un usuario y una constante llamada job donde guardaremos el valor 'developer'. 

const job = "developer";

const user = {
  firstName: "Pepito",
  lastName: "Gonzalez",
  age: 40,
  job: job
};

console.log(user);

// Añades una propiedad llamada firstName y dale un valor.
// Añade una propiedad llamada lastName y le dale un valor.
// Añade una propiedad llamada age y le dale un valor numérico.
// Añade una propiedad job a la que dale el valor de la constante job.
// Comprueba que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto.
// Cambia el nombre del usuario por otro distinto.
user.firstName = "Pedro";
console.log(user);
// Aumenta en 1 la edad del usuario.
user.age = user.age + 1;
console.log(user);
// Comprueba de nuevo que todo sigue funcionando correctamente.

// Ejercicio Extra. Investigando
// Prepara un botón con un listener para loguear el objeto event en la consola. 
// Investiga si la clave type que encontramos en él es una propiedad o un método.

const buttonListener = document.querySelector(".buttonListener").addEventListener ("click", (event) => {
  console.log(event);
})

// Prepara un input de tipo texto, a recogerlo desde JavaScript y a imprimirlo en la consola con console.dir para investigarlo 
// y comentar con la compañera estas propiedades: value, nodeNamey required.
 
const inputText = document.querySelector(".inputText");

console.dir(inputText);
console.log(inputText);

// 2.8 Arrays

const movies = ["Perfect days", "Scarface", "Lost in translation"];

// Añade al array anterior otra película más que te guste

movies[3] = "Lady bird";
console.log(movies);

// Modifica la película que menos te guste de las que hay en el array por el nombre de otra que te guste más

movies[1] = "Metropolis";
console.log(movies);

// Para terminar este ejercicio, vamos a encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos workWithMovies

const workWithMovies = () => {  
  const movies = ["Perfect days", "Scarface", "Lost in translation"];
  movies.push("Lady bird");
  movies[1] = "Metropolis";
  console.log(movies);
}
workWithMovies();

console.log(Array.isArray(movies));


// Ejemplo de función manejadora y evento

const buttonClick = document.querySelector(".buttonClick").addEventListener("click", /*el .addEventListener("click") sería el evento*/ function () {
  console.log("Hiciste click") /*el function () console.log("Hiciste click") sería la función manejadora*/
});


// EJERCICIOS DE BUCLES
// 1. Practicando
// Crea un bucle que muestre 10 veces, en la consola, el texto "Voy por la vuelta X" siendo el número de vueltas desde 1 hasta 10 (no desde 0 hasta 9).

for (let i = 0; i < 10; i++) {
  console.log("Voy por la vuelta " + (i + 1));
}

//Vamos a partir de una variable acc con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. 
// Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable acc.

let acc = 0;

for (let i = 0; i < 10; i++) {
  acc = acc + 2;
}

console.log("El resultado es: " + acc);


// 2. La media
// a) Crea un nuevo array numbers que contendrá 5 números cualesquiera y recorre el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). 
// Necesitas una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. 
// Para comprobar si el resultado es correcto, loguealo en la consola.

const numbers  = [1, 2, 3, 4, 5, 6];

let suma = 0;


for (let i = 0; i < numbers.length; i++) {
  suma = suma + numbers[i];
}

const mediaResult = suma / numbers.length;

console.log("La media es " + mediaResult);

// b) Añade un nuevo número al array y repetir el cálculo de la media. 
// En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

// c) Crea una función average, que toma como parámetro un array numbers, calcula la media del array (de cualquier longitud) 
// y devuelve la media. Para trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. 
// Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces 
// pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

function average (numbers) {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    suma = suma + numbers[i];
  }
  const media = suma / numbers.length;
  return media;
}

console.log("Media de [1, 2, 3, 4, 5]: " + average([1, 2, 3, 4, 5]));

// 3. Tenemos mucho en común

const inputOne = document.querySelector(".input--one");
const inputTwo = document.querySelector(".input--two");
const buttonBook = document.querySelector(".button--book");
const paragraphBook = document.querySelector(".paragraph--book");

const books = [];
const handleClick = () => {
  console.log("has hecho click");
  const resultOne = inputOne.value;
  const resultTwo = inputTwo.value;
  books.push(resultOne, resultTwo);
  for (const book of books) {
    paragraphBook.innerHTML += " A mí también me encantó " + book;
  }
};

buttonBook.addEventListener("click", handleClick);
