

let texto = "Hola estudiantes de academlo";

let caracter = texto[3];

console.log('hola' === 'Hola');

console.log("primera cadena" > "segunda cadena");

console.log("Superman" < "batman");


let string1 = "Hello";
let string2 = "World";

//concatenar string1 y el string2
let concatString = string1.concat(' ',string2);
console.log(concatString);

//metodo include
//el metodo includes() determina si una cadena de texto
// puede ser encontrada dentro de otra cadena de texto,devolviendo true o false

let texto1 = "Hola buenas noches queridos estudiantes";

let incluyeTexto = texto1.includes("dias");
incluyeTexto = texto1.includes("n");

console.log(incluyeTexto);

//metodo indexof()
// Devuelve el indice,dentro del objeto String que realiza
// Devuelve en numero de la posicion de la cadena

let texto3 = "Hola estudiantes de academlo";

let indice = texto3.indexOf("s");

console.log(indice);

let indice2=texto3.indexOf("s",7);
console.log(indice2);

//lastIndexOf() empieza a buscar de derecha a izquierda

let ultimoIndice = texto3.lastIndexOf("s",5);

console.log(ultimoIndice);


