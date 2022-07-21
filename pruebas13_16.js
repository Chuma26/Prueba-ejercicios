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
  
  uss = [{"application": null, "channel": "facebook", "email": "georg@gmail.com", "name": "Georg"}, 
  {"application": {"country": "Colombia", "state": "Bogotá"}, 
  "channel": "youtube", "email": "daniela@gmail.com", "name": "Daniela"}]
  
  
  function getApplications(users) {
    let pr = [];
    for(i = 0; i<users.length; i++){
      if(users[i].application != null ){
        pr.push(users[i]);
      }
    }
    return pr;
  }
  console.log(getApplications(uss));


