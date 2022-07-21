//Ejercicio 7
// Instrucciones
// Elimina un usuario del arreglo

// La función deleteUser() recibe 2 parámetros:

// users: Un arreglo de usuarios
// email: Un correo
// Tu labor es encontrar en el arreglo users al usuario que tenga el correo recibido y eliminarlo, finalmente tienes que usar return para devolver el arreglo users sin el usuario eliminado.

// Ejemplo: Recibimos los siguientes parámetros

  
// users = [{ name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }];
    
// email = "erik@academlo.com"

// El arreglo que debemos retornar es:

  
// [{ name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }]

// Ya que eliminamos el al usuario con el correo "erik@academlo.com".

users = [{ name: 'Erik', email: 'erik@academlo.com' }, 
         { name: 'Georg', email: 'georg@academlo.com' }, 
         { name: 'Andrea', email: 'andrea@gmail.com' }];
    
// email = "erik@academlo.com"

console.log(users[0].name);
console.log(users.length)

function deleteUser(users, email) {

  for(i=0;i<users.length;i++){
    if(users[i].email == email){
      
      // console.log(`El usuario designado es ${users[i].name}`);
      // console.log(`El correo designado es ${users[i].email}`);
      delete users[i];
      if(users[i] === undefined){
        users.splice(i , 1);

    }
      // users[i].prototype.reduce();
    } 
    
   
  }

  return users;
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable emails
  // return emails;
}

// console.log(deleteUser(users,'erik@academlo.com'));


//1.-Encontrar al usuario que tenga el correo designado
users =[
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' }
]

attendances =[
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
]

//ar3 = ar1.concat(ar2);


function mergeData(users, attendances) {
  let j=1;
  for(i=0;i<users.length-1;i++){
      users[i].attendance = attendances[i].attendance;
      arr = users;
      j++;
    }
    //console.log(users);
    return arr;
  }


console.log(mergeData(users,attendances));








students = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]

students = 
[
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]
countries =
[
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
]
countryName='Colombia';


//Ejercicio 10
// function countStudents(students, countries, countryName) {
//   let count = 0;
//   for(i=0;i<countries.length;i++){
//     if(countries[i].name === countryName){
//       count = countries[i].id;
//     }
//   }
//   let countS = 0;
//   for(i=0;i<students.length;i++){
//     if(students[i].country_id == count){
//       countS++;
//     }
//   }
//   return countS;
// }

// countStudents(students, countries, countryName);


students1 = [
  { name: 'Georg', email: 'georg@academlo.com', score: 100 },
  { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
  { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
]

function orderStudentsByScore(students1) {
  students1.score.sort((a,b) => {
    return a.value > b.value ? -1 : 1
  })
  return console.log(score);
}

orderStudentsByScore(students1);


function compare(students1,numb,score){
  if()

}








