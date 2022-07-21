//                   1
// ** Encuentra la última letra de un string **

// La función findLastLetter() recibe como parámetro un string cualquiera, tu labor es tomar ese string 
// y obtener el último caracter e imprimirlo usando console.log()

// Ejemplo: Si el string que recibe es "Hola, me llamo Erik", en el console.log deberás imprimir la letra k
process.stdin.resume();
process.stdin.setEncoding("utf-8");

process.stdin.on("data", function (input) {
  const data = input.split('\n');
  findLastLetter(data[0]);
});


function findLastLetter(text) {
  let a = text;
  let size = a.length;
  console.log(a[size-1]);
}

//                   2
//ultima palabra
// ** Encuentra la última palabra de un string **

// La función findLastWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener la última palabra e imprimirla usando console.log()

// Ejemplo: Si el string que recibe es "Hola, me llamo Erik", con console.log() deberás imprimir la palabra Erik

function findLastWord(text) {
    let array = text.split(' ');
    //console.log(array);
    let size = array.length;
    //console.log(size);
    let lastWord = array[size-1];
    console.log(lastWord);
  }

  findLastWord("Hola a todos");
  

  // 3 
  //segunda palabra
//   ** Encuentra la segunda palabra de un string **

// La función findSecondWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string, obtener la segunda palabra e imprimirla usando console.log()

// Ejemplo: Si el string que recibe es "Hola, me llamo Erik", con console.log() deberás imprimir la palabra me

  function findSecondWord(text) {
    let array = text.split(' ');
    //console.log(array);
    let size = array.length;
    //console.log(size);
    let secondWord = array[1];
    console.log(secondWord);
  }

  findSecondWord("Hola a todos");

  //        4
  // suma 3 valores de un vector
//   Suma los elementos de un arreglo

// La función sumValues() recibe como parámetro un arreglo con 3 elementos de tipo Number, tu labor es tomar los 3 valores y sumarlos, en esta ocasión tendrás que hacer que la función sumValues los retorne utilizando return.

// Ejemplo: Si el array que recibe es [1, 2, 3], deberás utilizar return para devolver 6 que es la suma de todos los elementos.

  function sumValues(array) {
    let size = array.length;
    console.log(size);
    let sum = 0;
    for(i = 0 ; i<=size-1; i++)
    {
        console.log(array[i]);
        sum += array[i];
    }
    return sum;
  }

  sumValues([1,2,3]);
  console.log(sumValues([1,2,3,4]));

  //    5
//   Obtén el correo de un usuario

// La función getEmail() recibe como parámetro un objeto con las propiedades email y age, tu labor es obtener el correo y retornarlo utilizando return.

// Ejemplo: Si el objeto que recibe es
// { name: "Erik", email: "erik@academlo.com" }
// deberás utilizar return para devolver "erik@academlo.com".


let user = [
    {name: "Simon", email: "simonchumacero26@gmail.com"}
];

  function getEmail(user) {
    return user[0].email;
  }

console.log(getEmail(user));
console.log(user.length);


//      6

function getEmails(users) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable emails
    // return emails;
  }


  let user1 = [
    {name: "Simon", email: "simonchumacero26@gmail.com"},
    {name: "Andres", email: "andrres@gmail.com"},
    {name: "Patricio", email: "noespatricio@gmail.com"},
];
let array= [];
let size = user1.length;
console.log(size);

function getEmails(user1){
for(i = 0;i<=size-1;i++)
    {
        array.push(user1[i].email);
        console.log(user1[i].email);
      
    }
    return array;
}
console.log(getEmails(user1))