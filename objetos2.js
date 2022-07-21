// Objects
// Los objetos son otro tipo de datos


let myObject = {name: "Ian", lastName: "Rosas", age: 32, country: "Mex"};

let name1 = "Arturo"
let user = {name: name1, lastName: "Rosas", age: 32, country: "Mex"};

//notacion de punto
console.log(user.name);
console.log(user.lastName);
console.log(user.age);

//dentro de []

console.log(user["name"]);

let propiedad = "name";
console.log(user[propiedad]);

propiedad = "lastName";
console.log(user[propiedad]);

propiedad = "age";
console.log(user[propiedad]);

propiedad = "country";
console.log(user[propiedad]);

console.log(user.propiedad); //undefined

//Agregar algun campo al object
user.username = "Iannncus";

//Eliminar una propiedad en un objeto --- delete

delete user.country;
console.log(user);

//combinar objetos y arreglos

let users = [
    {name: "Ian", lastName: "Rosas", age: 32, country: "Mex"},
    {name: "Sara", lastName: "Socas", age: 27, country: "Mex"},
    {name: "Milton", lastName: "Castillo", age: 15, country: "Mex"},
    {name: "Lewis", lastName: "Hamilton", age: 37, country: "Mex"},
];

console.log(users);

let usersObject = [
    {user1: "Ian", lastName: "Rosas", age: 32, country: "Mex"},
    {user2: "Sara", lastName: "Socas", age: 27, country: "Mex"},
    {user3: "Milton", lastName: "Castillo", age: 15, country: "Mex"},
    {user4: "Lewis", lastName: "Hamilton", age: 37, country: "Mex"},
];

console.log(usersObject);
 
// Ojo
// Imprimir por consola el apellido "Socas"
console.log(users[1].lastName);

console.log(users[3].name + ' ' + users[3].lastName);


//      ojo
// Objeto dentro de otro objeto
let usersObject2 = {
    user1: {name: "Ian", lastName: "Rosas", age: 32, country: "Mex"},
    user2: {name: "Sara", lastName: "Socas", age: 27, country: "Mex"},
    user3: {name: "Milton", lastName: "Castillo", age: 15, country: "Mex"},
    user4: {name: "Lewis", lastName: "Hamilton", age: 37, country: "Mex"},
};


console.log(usersObject2.user3.name);

//Los indeces se usan para los arreglos
// Y los puntos para la propiedad