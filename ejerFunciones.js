
function saludo1(nomb,edad)
{
    console.log(`Hola, mi nombre es ${nomb} y tengo ${edad} años`);
}

saludo1("Simon",22);

//1
let saludo="Hola los saludo desde:";

function showCountry()
{
    let country = "Bolivia";
    console.log(`${saludo} ${country}`);
}

showCountry();  

function addition(num1,num2)
{
    let result = num1+num2;
    return result;
}

console.log(addition(5,12));

function doble(sum)
{
    let dob=2*sum;
    return dob;
}

console.log(doble(addition(5,5)));


function welcome(name1){
    if(name1)
    {
        let wel = `Bienvenido ${name1}`;
        return wel;
    }
    return wel = "Bienvenido Anónimo";
}

console.log(welcome("Simon"));


function equal(num1,num2)
{
    if (num1 === num2)
    {
        return true;
    }
    return false;
}

console.log(equal(5,5));

