// //7
// Instrucciones
// Elimina un usuario del arreglo
// La función deleteUser() recibe 2 parámetros:
// users: Un arreglo de usuarios
// email: Un correo
// Tu labor es encontrar en el arreglo users al usuario que tenga el correo recibido y eliminarlo, finalmente tienes que usar return para devolver el arreglo users sin el usuario eliminado.
// Ejemplo: Recibimos los siguientes parámetros
users = [{ name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }];   
email = "erik@academlo.com"
// El arreglo que debemos retornar es:
//[{ name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }]
// Ya que eliminamos el al usuario con el correo "erik@academlo.com".

function deleteUser(users, email) {

    for(i=0;i<users.length;i++){
      if(users[i].email == email){
        delete users[i];
        if(users[i] === undefined){
          users.splice(i , 1);
        }
      }  
    }
   return users;
  }

console.log(deleteUser(users,email));

// 8 
// Instrucciones
// Mezclando datos de 2 arreglos
// La función mergeData() recibe como parámetros 2 arreglos:
// El primer arreglo es una lista de usuarios con una estructura como la siguiente
// [
//   { name: 'Georg', email: 'georg@academlo.com' },
//   { name: 'Andrea', email: 'andrea@gmail.com' }
// ]
// El segundo arreglo es una lista de asistencias con una estructura como la siguiente, donde attendance nos indica si el usuario asistió o no a sus clases de programación
users1 = [
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
]
// Tu labor es hacer una mezcla de los datos de ambos arreglos y devolver uno solo que contenga toda la información (sin datos duplicados).
// Ejemplo:
// En el caso de haber recibido los 2 arreglos mencionados anterior mente deberas retornar el siguiente arreglo:
attendances =[
    { name: 'Georg', email: 'georg@academlo.com', attendance: true },
    { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
]
// *Recuerda utilizar return para devolver tu solución.
// *El primer arreglo que recibe la función puede tener n cantidad de usuarios.
// *El segundo arreglo que recibe la función puede tener n cantidad de asistencias


function mergeData(user1, attendances) {
    for(i=0;i<user1.length;i++){
        user1[i].attendance = attendances[i].attendance;
      }
      return user1;
    }
console.log(mergeData(users1,attendances));

// 9
// Instrucciones
// Ordenando estudiantes por calificación

// La función orderStudentsByScore() recibe como parámetro un arreglo de estudiantes con la siguiente estructura:

// [
//   { name: 'Georg', email: 'georg@academlo.com', score: 100 },
//   { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
//   { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
// ]
// Tu labor es hacer ordenar todos los elementos de menor a mayor utilizando como referencia la propiedad 'score'.

// Ejemplo:
// Si tu función recibe el arreglo mencionado anteriormente deberías retornar el siguiente arreglo, ya que el score más pequeño es 34, le sigue el 70 y el mayor es 100:

  
// [
//     { name: 'Andrés', email: 'andres@gmail.com', score: 34 },
//     { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
//     { name: 'Georg', email: 'georg@academlo.com', score: 100 }
// ]

// *Puedes utilizar el método sort de Javascript.
// *Recuerda utilizar return para devolver tu solución.
// *El primer arreglo que recibe la función puede tener n cantidad de estudiantes.

//Aprender el metodos sort () xD
students = [
    { name: 'Georg', email: 'georg@academlo.com', score: 100 },
    { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
    { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
  ]
  function orderStudentsByScore(students) {
    let orderedData = students.sort(function(a , b) {
      if(a.score > b.score ){
          return 1
      } else {
          return -1;
      }
    })
    return orderedData;
  }let str = students.sort(function(a , b) {
    if(a.score > b.score ){
        return 1
    } else {
        return -1;
    }
  })

  console.log(str);

  //10
//   Instrucciones
// Cuenta los estudiantes de un país
// La función countStudents() recibe 3 parámetros, los 2 primeros son arreglos y el tercero es un string
// El primer arreglo es una lista de estudiantes con una estructura como la siguiente

// El segundo arreglo es una lista de países con una estructura como la siguiente
// El tercer parámetro es el nombre de un país, por ejemplo: 'Colombia'
// Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función.
// En el ejemplo anterior retornaríamos 3, ya que 3 estudiantes pertenecen al país con el id 2.
// *Recuerda utilizar return para devolver tu solución.
// *El primer arreglo que recibe la función puede tener n cantidad de estudiantes.
// *El segundo arreglo que recibe la función puede tener n cantidad de países. *El tercer parámetro que recibe la función puede ser el nombre de cualquier país.
let students2 = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]
let countries = [
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
]
let countryName = "Colombia";
function countStudents(students2, countries, countryName) {
    let count = 0;

    //Para saber el id
    for(i=0;i<countries.length;i++){
      if(countries[i].name === countryName){
        count = countries[i].id;
      }
    }
    // Para saber cuantos estudiantes de ese pais hay
    let countS = 0;
    for(i=0;i<students2.length;i++){
      if(students2[i].country_id == count){
        countS++;
      }
    }
    return countS;
  }

  console.log(countStudents(students2, countries, countryName));

  //11
//   Instrucciones
// Encuentra la edad que más se repite
// La función findMostCommonAge() recibe como parámetro un arreglo de estudiantes
// El arreglo es una lista de estudiantes con una estructura como la siguiente
let  stu = [
  { name: 'Daniela', age: 25 },
  { name: 'Andrea', age: 23 },
  { name: 'José', age: 27 },
  { name: 'Georg', age: 23 },
];
// Tu labor es encontrar y retornar la edad que se repite más veces.
// En el ejemplo anterior retornaríamos 23, ya que 23 es la edad que se repite más veces.
// *Recuerda utilizar return para devolver tu solución.
// *El arreglo que recibe la función puede tener n cantidad de estudiantes.

// function findMostCommonAge(students) {
//   return students3.sort((a, b) => 
//   students3.filter(v => v===a).length
// - students3.filter(v => v === b).length).pop();
// }

// console.log(findMostCommonAge(students3));


function findMostCommonAge(stu) {
  let cont = 0;
  let mayor = 0;
  let mostCommonAge = 0;
for(i=0; i<stu.length; i++){
  let contA = 0;
  if(cont === 0){
    actual = stu[i].age;
  }
  for(j=0; j<stu.length; j++)
  {
    if(actual == stu[j].age){
      contA++;
    }
  }
  if(contA > mayor)
  {
    mayor = contA;
    mostCommonAge = stu[i].age;
  }
}
  return mostCommonAge;
}

console.log(findMostCommonAge(stu));
console.log(stu[3]);

//12
// Instrucciones
// Encontrando un usario por su nombre
// La función findUser() recibe como parámetros 1 arreglo y un string:
// El arreglo es una lista de usuarios con una estructura como la siguiente
const users45 = [
    {
        name: 'Erik',
        gender: 'male',
        age: 22,
    },
    {
        name: 'Daniela',
        gender: 'female',
        age: 22,
    },
    {
        name: 'Gustavo',
        gender: 'male',
        age: 49,
    },
    {
        name: 'María',
        gender: 'female',
        age: 35,
    },
];
// El string es el nombre de uno de los usuarios que se encuentra en el arreglo, por ejemplo: 'Gustavo'
// Tu labor es encontrar y devolver al usuario con el nombre recibido. Ejemplo:
// En el caso de haber recibido el arreglo mencionado anteriormento y el nombre 'Gustavo' deberías retornar:
// {
//   name: 'Gustavo',
//   gender: 'male',
//   age: 49,
// }
// *Recuerda utilizar return para devolver tu solución.
// *El primer arreglo que recibe la función puede tener n cantidad de usuarios.

name45 = 'Gustavo';
function findUser(users45, name45) {
  let arr45 = [];
  let position = 0;
  for(i = 0 ; i < users45.length ; i++){
    if(users45[i].name == name45 ){
      position = i;
    }

  }
  //console.log(users45[position]);
  return users45[position];
}

console.log(findUser(users45,name45));

//13
// Instrucciones
// En Academlo tenemos usuarios que crean una cuenta, pero no todos envían su aplicación para formar parte de los cursos.
// Obtén los usuarios que han enviado su aplicación.
// La función getApplications() recibe como parámetro un arreglo de usuarios con la siguiente estructura:
users32 = [
  { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
  { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' }},
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' }}
];
// Tu labor es obtener solo a los usuarios que hayan enviado su aplicación, para esto puedes tomar como referencia la propiedad application de cada usuario.
// Ejemplo:
// Si tu función recibe el arreglo mencionado anteriormente deberías retornar el siguiente arreglo, ya que solo Georg y Daniela enviaron su aplicación:
// [
//     { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' }},
//     { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' }}
// ]
// *Recuerda utilizar return para devolver tu solución.
// *El arreglo que recibe la función puede tener n cantidad de usuarios.



function getApplications(users) {
  for(i = 0; i<users32.length; i++){
    if(users32[i].application == null || users32[i].application == ''){
      users32.splice(i,1);
      delete users32[i];
      
    }
  }
  return users32;
}
console.log(getApplications(users32));

