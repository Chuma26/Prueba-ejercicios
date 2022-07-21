let texto = "Hola estudiantes de academlo";

let caracter = texto[3];

console.log(caracter);

//metodo concat

let string1 = "Hello";
let string2 = "World";

let concatString = string1.concat(' ',string2);

console.log(concatString);




/*--------------------------------------------------
----                                            ----
----   Determina si un texto tiene una palabra  ----
----               buscada                      ----
----                                            ----
----------------------------------------------------
*/


//metodo includes
//Determina si una cadena de texto puede ser encontrada
//dentro de otra cadena de texto

let texto1 = "Hola buenas noches queridos estudiantes";

let incluyeTexto = texto1.includes("dias");
incluyeTexto = texto1.includes("noches");

console.log(incluyeTexto);


/*--------------------------------------------------
----                                            ----
----   Devuelve la posicion/indice de una       ----
----               cadena                       ----
----                                            ----
----------------------------------------------------*/

// EL INDICE ES LA POSICION
//metodo indexof()
//Devuelve el indice
//El indice es la posicion en la que se encuentra cada caracter
//Devuelve la primera vez que aparezca la letra/palabra
// el numero en el que se encuenta [0,1,2,3,4,5]

let texto3 = "Hola estudiantes de academlo";
//           [0123456789]
console.log("Indexof: ");
let indice1 = texto3.indexOf("estudiantes");

console.log(indice1);

//Quiero que me busques el indice a partir de la casilla 6
let indice2 = texto3.indexOf("s",7);
console.log(indice2);


// metodo lastindexof
// lo mismo que el indexof solo que busca de derecha a izquierda
let ultimoIndice = texto3.lastIndexOf("s");
console.log(ultimoIndice);







// metodo repeat
//construye y devuelve una nueva cadena que contiene el numero
// especificado de copias

let nuevoTexto = "hola";

let textRepetido = nuevoTexto.repeat(3);

console.log(textRepetido);






//length cantidad dee caracteres de uns string

let textos = "Hola a todos";
let cantidad = textos.length;
console.log(cantidad);




//replace remplaza UNA 

let textoOriginal = "Jhony la gente esta muy loca";

let textoAlterado = textoOriginal.replace("loca","feliz");
//let textoAlterado = textoOriginal.replace('e','i');

console.log(textoAlterado);

//replaceAll remplaza TODAS

let remplazarTodas = textoOriginal.replaceAll('e','i');

console.log(remplazarTodas);




//slice
//Extrae un seccion de una cadena y la devuelve como un nuevo string
// esto no modifica la string original

let sinRebanar = "En mi ciudad esta haciendo demasiado calor";
let rebanado = sinRebanar.slice(12);

console.log(rebanado);






let name1 = "Juan";
let name2 = "Pedro";
let name3 = "Sergio";

let names = ["Juan", "Pedro", "Sergio", 5 ,false, undefined, [1,2,3]];

console.log(names[6]);
console.log(names[6][2]);

//split
//Toma un patron y divide un string dentro de una lista
// ordenada de sub strings


let frase = "Los alumnos ya quieren empezar a sufrir";

let fraseSeparada = frase.split(' ');
console.log(fraseSeparada);

let csv = "Los/alumnos/ya/quieren/empezar/a/sufrir";
console.log(csv.split("/"));


//toLowerCase()
//Devuelve el valor del string llamado en minusculas

let nombrecompleto = "IAN ROSAS Maldonado";

let nombreEnMinusculas = nombrecompleto.toLowerCase();
console.log(nombreEnMinusculas);



//toUpperCase()
//Devuelve el valor del string llamado en minusculas

let nombrecompleto1 = "Simon Chumacero Espada";

let nombreEnMayusculas = nombrecompleto1.toUpperCase();
console.log(nombreEnMayusculas);


/*--------------------------------------------------
----                                            ----
----   Determina si un texto tiene una palabra  ----
----               buscada                      ----
----                                            ----
----------------------------------------------------
*/
