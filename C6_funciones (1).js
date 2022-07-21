// sumar 5 + 7

// let number1 = 5;
// let number2 = 7;

// let result = number1 + number2;

// console.log(result);

// clean code
// el no debe estar hecho para máquina / legible para otros programadores

// let number3 = 20;
// let number4 = 13;

// let result2 = number3 + number4;

//console.log(result2);

// Funciones
// Declarar nuestra función

function functionName() {
  // lo que se ejecutara cunado invoques la funcion
}

functionName();

function addition() {
  //intrucciones que ejecutará nuestra función
  let number1 = 5;
  let number2 = 7;

  let result = number1 + number2;

  console.log(result);
}

// Invocar-llamar nuestra función
addition();

// parametros

function sum(number1, number2) {
  // intrucciones de mi funcion
  const result = number1 + number2;
  console.log(result);
}

// argumentos

sum(5, 7);
sum(20, 13);
sum(11, 100);

// Scope -- Alcance de una variable

// variables locales, variables globales

function function1() {
  let a = 10;
  console.log(a);
}

function function2() {
  let a = 20;
  console.log(a);
}

function1();
function2();

// variables globales
let name1 = "Luis";

function showName(name) {
  console.log(name);
}

showName("Maxwell");
showName(name1);

// return

function newSum(num1, num2) {
  let result = num1 + num2;
  return result;
}

console.log(newSum(10, 23));

let sumResult = newSum(20, 50); // 70
console.log(sumResult);

function returnName(name1) {
  return name1;
}

let newHuman = returnName(name1);

console.log(newHuman);

function diff(num1, num2) {
  let diffResult = num1 - num2;
  console.log("antes del return");
  return diffResult;
  console.log("despues del return");
}

let result = diff(15, 10);
console.log(result);

function greaterNumber(num1, num2) {
  if (num1 > num2) {
    // 7 > 10 --> false
    return num1; // no ejecuta cuando la condicion es verdadera
  }
  return num2;
}

let greatest = greaterNumber(7, 12);
console.log(greatest);

function times(num1, num2) {
  // El resultado de 5 x 7 es : 35
  return `El resultado de ${num1} x ${num2} es : ${num1 * num2}`;
}

console.log(times(10, 7));

// reutilizando el valor de una funcion en otra

// quiero contar el numero de personas que pasan por un puente en sus autos
// sabiendo que todos los autos llevan 4 pasajeros

function carQty(qty) {
  return qty;
}

function personQty(persons, cars) {
  let result = persons * carQty(cars);
  return result;
}

console.log(personQty(3, 25));
