//js es un lenguaje de tipado débil

// instrucciones a una computadora

// maneras para crear variables

// Para crear variables usamos let, var o const.
// No puede contener palabras reservadas de js.
// No debe conmezar con un número
// No debe contener espacios
// solo puede contener letras, numeros, guiones bajos y el signo de $
// Usamos camel case, cada palabra nueva en el nombre se inicia con mayuscula

/******************************/
/* Ejercicios con variables: */
/*****************************/
/*
Ejercicio 1:
1. Declarar dos variables: nombre y usuario sin asignarle ningún valor.
2. Asignar tu nombre a la variable nombre.
3. Copia el valor de nombre a la variable usuario.
4. sin usar la consola responde ¿Qué valor tiene la variable usuario?
*/

// Ejercicio 2:
// ¿Cómo nombrarías a dicha variable? *en ingles
// 1. Crea una variable con el nombre de "nuestro planeta".
// 2. Crea una variable para almacenar el nombre del "usuario actual" de un sitio web.

// Tipos de datos
/* 
  1.- Number
      --- Cuar dato que sea un numero entero, punto decímal 4 - 5.78
      --- Con punto decimal igual se conocen como coma flotante (float)
  2.- String
      --- Es un texto o cadena de caracteres entre comillas
      --- Simples      ' ' 
      --- Dobles       " "
      --- invertidas   ` `
  3.- Bool
      --- Son valores lógicos verdaro o falso, true or false
      --- true
      --- false
  4.- Null
      --- tipo vacio 
  5.- Undefined
      --- tipo no esta definido aún 
  6.- NaN
      --- Not a Number
*/

let nombre = "Ian";
console.log(typeof texto);
let number = "23";
console.log(typeof number);
let boolean = false;
console.log(typeof boolean);

// Conversión de tipos de datos

console.log(number);

// de numero a texto toString()
// number.toString(); --> resultado será un texto

// de string a numero
// Number(variable) --- parseInt(cadenaEntero) --- parseFloat(variable)

let newNumber = Number(number);
console.log(typeof newNumber);

let otherNumber = parseInt(number);
console.log(typeof otherNumber);

let decimal = "45.78";
let decimalNumber = parseFloat(decimal);

console.log(decimalNumber);

let prueba;

console.log(prueba);

//literal template

console.log(`Mi nombre es: ${nombre}`);

console.log(parseFloat("10.5.52"));

let value = "10.5.52";

console.log(parseFloat(value));

/*number
String
boolean
null
undefined
NaN */

const miString = "texto numero uno";
const miString2 = "texto2";
const miString3 = `texto3`;

console.log(miString[0]);

let longitud = miString.length;
console.log(longitud);

// [t, e, x, t, o] // posiciones o indices
// [0, 1, 2, 3, 4] // longitud es la cantidad de letras

// concatenación

let palabra1 = "hola";
let palabra2 = "alumno";

let saludoo = palabra1 + palabra2;
let saludo = "hola como estas " + palabra2;

console.log(saludo);

// template literals

let saludo2 = `hola como estas ${palabra2} bienvenido ${palabra1} mas texto`;
console.log(saludo2);

console.log(2 + "22");

let numero1 = 2;
let numero2 = "22";

let resultado = numero1 / numero2;
// forzamos a ser un numero
console.log(resultado);

//Coherción de tipos
// ---> coherción implicita
// cuando el lenguaje nos apoya para cambiar el tipo de valor
// ---> coherción explicita
// cuando nosotros obligamos a que cambie el tipo de valor

// se aplican en numeros, textos y valores booleanos

console.log(Boolean(NaN));

// todo aquello que sea false, 0, "", null, undefined, NaN --> false
// valor falsy

//truthy ---> valor true
// 1, "lkjdfldsfj", ' ',

console.log(Boolean(-2));

// Operadores

// Numeros aritmeticos --> realizar operaciones con los datos
// + --> representa una suma
// - --> resta
// * --> multiplicación
// / --> división
// % --> módulo o resto
// ** elevar al cuadrado

2 ** 2;
2 ** 3;
2 ** 4;
2 ** 5;

// 5 + 3 = 8
// operandos, datos que sirven para la operación
// operador (+) es un signo que nos indica que operación debemos aplicar a los operandos
// operación una serie de pasos que se eraliza para obtener un resultado, evaluar un resultado.

// operadores unarios y operadores binarios
// binario recibe dos o más operando para producir un resultado
// operador unario solo recibe un operando y produce un resultado.

// raiz 25 = 5

// modulo o resto es una división pero el resultado es el residuo de la división.

// jerarquia de operaciones IMPORTANTISIMO
//console.log(4 - 2 * 3); 4 - 6 --> -2

// primero los parentesis
// raices y potencias
// multiplicaciones y divisiones / modulo
// sumas y restas
// izquierda a derecha

// strings
// + funciona como concatenación

// Operadores de asignación
// = asigna un valor o resultado a una variable o constante
// primero se realizan las operaciones y luego se aplica el operador asignación

// Modifica y asigna --- cortos shorthands

let numero = 2;

numero = numero + 2;

console.log(numero); // 4

// +=
// *=
// /=
// -=

console.log(numero + 1);

// incremento y decremento solo se aplica en variables
// cuando van antes de la variable el resultado es el valor actual
// cuando van después, el resultado es el valor anterior de la variable
let numero20 = 1;

console.log(numero20++);
// restar
console.log(--numero20);

// %
// +
// **
// /
// *
// -

// Asignación
// = --> Asignar un valor a una variable
// +=  --> sumar y asignar un valor a una variable
// -= ---> resta y asigna un valor a una variable
// *= ---> multiplica y asigna
// /= ---> divide y asigna
// incremento ++, antes de la variable el resultado es el valor actual, depués de la variable el resultado
// es el valor anterior
let aa = 1;
console.log(++aa); // 2
console.log(aa++); // 2
// decremento --, antes de la variable el resultado es el valor actual, depués de la variable el resultado
// es el valor anterior

// operadores realcionales u operadores de comparación
// > mayor que... numeroA y numeroB
// numeroA > numeroB ---> resultado va a ser un valor booleano / true - false
// 34 > 10 --> true
// 10 > 100 --> false

// menor que <
// numeroA < numeroB --> numeroA es más pequeño que el numeroB
// 34 < 10 --> false
// 10 < 34 --> true

// 5 < 5 --> false
// 5 > 5 --> false
// 5 no es mayor ni menor a 5, son iguales

// operador >= mayor o igual que
// 5 >= 5 --> true

// operador <=
// 17 <= 17 --> true
// 18 <= 17 --> false

// comparación (=) --- ( == ) el primero es una asignación, el segundo es una comparación.
let a = 7;
let b = 12;

// diferente de (! =) !=
// a != b;

let newe = a != b; // true
console.log(newe);

console.log("z" > "a");

console.log("platon" > "pluton"); // false

console.log("z" > "A");

console.log("2" < 1); //false coherción implicita --> cuando el lenguaje forza a cambiar el tipo de dato

// trhuty & falsy

console.log(false == ""); // true

console.log(false === ""); // false

// = = true --> comparación
// = = = false --> comparación estricta --> no permite la coherción de tipos

// = =

console.log(1 == "1"); // true
console.log(1 === "1"); // false

// 0 1 2 3 4 5 6 7 8 9 10
// a b c d e f g h i j k l ... z

console.log("250px" < "350px");

console.log("a" > "Z");

let variable11 = 10;
++variable11; // resultado es el resultado de variable11 + 1 --> 11
//variable++; // el resultado es el valor anterior a la operación ---> 10

let variable1 = 5;
let variable2 = 2;

console.log(++variable1); // 6
console.log(variable2++); // 2
console.log(variable2); // 3

// Logicos ---> sirven para hacer operaciones sobre los datos boolenos

// OR - o --> || --> tabla de verdad.

/* 

operando1 | operando2 | resultado
 true     |   true    | true
 true     |   false   | true
 false    |   true    | true
 false    |   false   | false 

 el resultado va a ser true con que al menos un operando sea verdadero 
 y solo sera false cuando todos los operandos sean falso 

 (es de noche) o (es de dia) -->  true 

*/

let verdadero = true;
let falso = false;

console.log("operando1    |  operando2   |  resultado");
console.log(`verdadero    |  verdadero   |  ${verdadero || verdadero}`);
console.log(`verdadero    |  false       |  ${verdadero || falso}`);
console.log(`falso        |  verdadero   |  ${falso || verdadero}`);
console.log(`falso        |  falso       |  ${falso || falso}`);

/*
  AND -- y --> &&

  operando1 | operando2 | resultado
   true     |   true    | true
   true     |   false   | false
   false    |   true    | false
   false    |   false   | false

  EL oerador lógico "y" solo da verdadero cuando los todos los operandos son verdaderos 
  y da falso cuando cualquiera de los oeprandos o todos son falso.

  (hoy es jueves) Y (es de noche) ---> 
    true          Y    true ---> true 
  (hoy es lunes) y (es de noche) ---> 
      false      y    true ---> false


 */
console.log("-------------------------------------------");
console.log("operando1    |  operando2   |  resultado");
console.log(`verdadero    |  verdadero   |  ${verdadero && verdadero}`);
console.log(`verdadero    |  false       |  ${verdadero && falso}`);
console.log(`falso        |  verdadero   |  ${falso && verdadero}`);
console.log(`falso        |  falso       |  ${falso && falso}`);

/*
  NOT ---> ! (negación, inversión) ---> unario

   operando2 | resultado
   true      | false
   false     | true

  negar (hoy es jueves) ---> 
  negar True --> false

  negar (es de dia) 
  negar false --> true
*/

console.log("-------------------------------------------");
console.log("operando2   |  resultado");
console.log(`verdadero   |  ${!verdadero}`);
console.log(`false       |  ${!falso}`);

let a = true;
let b = false;
let c = true;

// a && b && c

// false && true

// a || b || c

// true || true --> true

// Jeraquia --> primero se resuelven los && y luego los OR de ultimo las !

(a && b) || (b && c);
// a y b --- true && false --> false
// b y c --- false && true ---> false
// false || false ---> false
