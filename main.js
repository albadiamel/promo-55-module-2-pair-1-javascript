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
    parrafo.innerHTML = event.target.value;
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

start.addEventListener("click", () => {
    lista.innerHTML =
    '<li>' + inception + '</li>' +
    '<li>' + theButterFlyEffect + '</li>' +
    '<li>' + eternalSunshineOfTheSM + '</li>' +
    '<li>' + blueVelvet + '</li>' +
    '<li>' + split + '</li>';
})
/*Faltaría la parte de que al hacer click sobre el nombre de cada película aparezca el nombre de esa película. Mejor preguntarle a Ana.

const seleccion = document.querySelector(".peli-seleccionada");

inception.addEventListener("click", () => {
    seleccion.innerHTML = 'La peli seleccionada es' + inception;
})

Extra. Un listener para todos (Hay que tener completo el anterior para hacerlo)*/

//EJERCICIOS DE CONDICIONALES
//1. Control de acceso









