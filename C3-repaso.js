
const miString = "texto numero uno";

console.log(miString[0]);

//saber la longitud de una palabra
let longitud = miString.length;
console.log(longitud);

//concatenacion

let palabra1= "hola";
let palabra2= "alumno";

let saludo = palabra1 + " " + palabra2;

console.log(saludo);

//template literals
//Son comillas inversas/ es una ayuda para concatenar
let saludo2 = `hola como estas ${palabra2}`

console.log(saludo2);

console.log("22"+2);

//cohercion de tipos 
let numero1= 2;
let numero2= "22";

//forzamos a ser un numero
let resultado = numero2-numero1;
console.log(resultado);

//Cohercion de tipos
//---->cohercion implicita
//cuando el lenguaje nos apoya para cambiar el tipo de valor
//---->cohercion explicita
//cuando nosotros obligamos a que cambie el valor

//se aplica en numeros,textos y valores booleanos

console.log(Boolean(NaN));
// todo aquello que sea false, 0, "",null, undefined, Nan -->false
console.log(Boolean(" "));

const nombre = "JS";

console.log(`Hola ${1}`) //
console.log(`Hola ${'nombre'}`) //
console.log(`Hola ${nombre}`) //

console.log('Una cadena de texto'[4]) //
console.log('Una cadena de texto'[0]) //

console.log('LasQuinceLetras'.length) //

console.log(1 / 0) //
console.log(1 / 'dos') //




//Clase 4
//
let a=1;
console.log(++a); //2
console.log(a++); //1


console.log("250px" < "150px");

let variable1 = 5;
let variable2 = 5;

console.log(++variable1); //6
console.log(variable2++); //5

console.log(variable2);
