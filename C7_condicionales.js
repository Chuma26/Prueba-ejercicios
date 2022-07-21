// Condicionales


//if anidados
/*if (condicion ===true )
{
    if(otracondicion)
    {
        if(otracondicion x2)
        {

        }
    }
}*/

// Operador ternario ?

let mayor = 5>7 ? 'el 5 es mayor que 7' : 'el 5 no es mayor que 7';

console.group(mayor);

function greater(number1,number2)
{
    let result = number1 > number2 ? `${number1} es mayor que ${number2}` : `${number2} es mayor que ${number1}`;
    return result;
}

console.log(greater(100,99));

// otra vista 

/*let mayor = 5>7 ? 'el 5 es mayor que 7' : 'el 5 no es mayor que 7';

console.group(mayor);

function greater(number1,number2)
{
    let result = number1 > number2 
    ? `${number1} s mayor que ${number2}` 
    : `${number2} es mayor que ${number1}`;
    return result;
}*/

// Switch

/*switch (valor){
    case value1:
        //codigo
        break;
    case value2:
        //bloque de codigo

    case value3:
        //cod
        break;
    default:

}*/

function calc(number1, number2, operator){
    let result = 0;
    switch (operator){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default :
            result = 'No se hacer esa operacion'
    }
    return result;
}

console.log(calc(12,13,'+'));
console.log(calc(100,13,'-'));
console.log(calc(21,12,'*'));
console.log(calc(120,10,'/'));


//Otra forma
// function calc(number1, number2, operator){
//     let result = 0;
//     switch (operator){
//         case '+':
//             return result = number1 + number2;

//         case '-':
//             return result = number1 - number2;

//         case '*':
//             return result = number1 * number2;

//         case '/':
//             return result = number1 / number2;

//         default :
//            return result = 'No se hacer esa operacion'
//     }
// }

// console.log(calc(12,13,'+'));


// else if

// if(papas){
//     //compro papas
// } else if(doritos){
//     //compro doritos
// } else if(chetos){
//     //compro dchetos
// } else {
//     //compro otra cosa o mando error
// }