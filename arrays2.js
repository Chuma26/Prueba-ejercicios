//Arreglos 
//Tipo de datos
let myArray = [];
console.log(myArray.length);

let myArray2 = [1,"text",true, undefined,["hola","mundo"]];

console.log(myArray2.length);

let a = 100;
let b = a;

a = 90;

console.log(b);

let newArray = myArray2;
myArray2 = ["uno"];

//definir un array con 7 elementos diferentes y extraer el ultimo elemento

let arreglo = [1,2,3,4,5,6,7];
function penultimateItem(array){
    let lastIndex = array.length - 1;
    if(lastIndex <= 0){
        console.log('Solo existe 1 elemento en el arreglo');
    }
    let penultimate = array[lastIndex-1];

    console.log(penultimate);
}

penultimateItem(arreglo);

let nuevoArreglo = [1,2];
penultimateItem(nuevoArreglo);

//Anadir un elemento al final de un arreglo
// arreglo.push()

let otroArreglo = [100,200,300,400];

otroArreglo.push(500);
otroArreglo.push(600,700,800);
console.log(otroArreglo);

//Eliminar el ultimo elemento de un array
// array.pop()

otroArreglo.pop();
console.log(otroArreglo);

//Anadir un elemento al principio de un Array
// array.unshift()
otroArreglo.unshift(0);
console.log(otroArreglo);

//Eliminar el primer elemento de un array
// array.shift()
otroArreglo.shift();
console.log(otroArreglo);

