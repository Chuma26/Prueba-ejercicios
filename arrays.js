let myArray = [];

console.log(myArray.length);

let myArray2 = [1, "text", true, undefined, ["hola", "mundo"]];

console.log(myArray2.length);

let a=100;
let b=a;

a=90;

console.log(b);

let newArray = myArray2;
myArray2 = ["uno"];

console.log(newArray);

let myArray3= ("hola",1,2,3,true,false);

console.log(myArray2[2]);

let arreglo = [1,2,3,4,5,6,7];

function penultimateItem(array)
{
    let lastIndex = array.length - 1;
    
    if(lastIndex ===0)
    {
        console.log('Solo existe 1 elemento en el arreglo');
    }else{
    let penultimate = array[lastIndex-1];
    console.log(penultimateItem);
    }
}

penultimateItem(arreglo);

let nuevoArreglo = [1,2];

//penultimate(nuevoArreglo);

let newA =[1];

penultimateItem(newA);

//A;adir un elemento al final de un arreglo

let otroArreglo = [100,200,300,400];

otroArreglo = [100,200,300,400,500];

otroArreglo.push(500);
otroArreglo.push(600,700,800);
console.log(otroArreglo);
//Borrar el ultimo
otroArreglo.pop();
console.log(otroArreglo);