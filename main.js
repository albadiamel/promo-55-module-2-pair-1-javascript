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
console.log(isUserAllowed ? "Bienvenida, " + userName : "Lo siento pero el usuario que has intorducido no está registrado");


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
let userAvatar = "https://dev.adalab.es/gato-siames.webp";

const avatarImg = document.querySelector(".user__avatar");

avatarImg.src = userAvatar || DEFAULT_AVATAR;

//const userContainer = document.querySelector(".user");

//userContainer.innerHTML += '<img class="user__avatar" src="userAvatar || DEFAULT_AVATAR" />';

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



