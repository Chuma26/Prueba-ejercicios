
let array=[1,2,3,4,5];
let array2=[52,25,12,90,76,101,34,65];
let prueba = array.length;
console.log(prueba);
console.log(parseInt(prueba/2));

function arrayMedio(arr)
{
    let cantElementos = array.length;
    let medio = parseInt(cantElementos/2);
    if(arr.length%2 == 0)
    {
        console.log("El elemento del medio es " + arr[medio-1]);
        console.log("El elemento del medio es " + arr[medio]);
    }
    else
    {
        console.log("El elemento del medio es " + arr[medio]);
    }

}

arrayMedio(array2);



// Cuando la condicion es true pasa o es true / break lo rompe
let edad = 0;
while(true)
{
    console.log(`Tienes ${edad} anios, aun vives`);
    edad++;
    if(edad>100)
    {
        break;
    }
}

//Ejercicio hecho por el profe

function middleItem(arr)
{
    let iteQty = arr.length;
    let isNon = it
}

let i=0;
let n=0;
while (i<5)
{
    i++;
    //interrumpe el ciclo, pero vuelve a iniciar el ciclo ya no ejecuta lo de abajo
    if (i==3) continue;
    n+=1;
    console.log(n,i);
}


let numArray = [1,2,3,4,5,6,7,8,9,10];
for (let i of numArray)
{
    console.log(i);
    i++;
}


//for of / como funciona

let animals = ["cat","dog","cow","fish","snake","turtle","butterfly"];

for (let i of animals)
{
    console.log(i);
    i++;
}


//funciones flecha

function suma(num1,num2)
{
    console.log(num1+num2);
}
suma(5,8);

// si es par o no 
let numbers=[1,2,3,4,5];

const isOdd = () =>
{

}
numbers.every((elemento) => elemento % 2 === 1);