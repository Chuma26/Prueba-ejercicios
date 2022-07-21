//puedes almacenar lo que quieras

let name1 = "Arturo";
let user = {name : "Ian",lastName: "Rosas", age: 32, country: "Mex"};

console.log(user.name);
console.log(user.lastName);
console.log(user.age);

//dentro de []

console.log(user["name"]);

let propiedad = "name";
console.log(user[propiedad]);

propiedad="lastName";
console.log(user[propiedad]);

propiedad="age";
console.log(user[propiedad]);

propiedad="country";
console.log(user[propiedad]);

console.log(user[1]);

user.username="Iannacus";

console.log(user);

//Eliminar propiedades de un onjeto

let users = {
    user1: {name : "Ian",lastName: "Rosas", age: 32, country: "Mex"},
    user2: {name : "Sars",lastName: "Rosas", age: 32, country: "Mex"},
    user3: {name : "William",lastName: "Rosas", age: 32, country: "Mex"},
    user4: {name : "Ian",lastName: "Rosas", age: 32, country: "Mex"},
    user5: {name : "Lowis",lastName: "Rosas", age: 32, country: "Mex"},
};

console.log(users);

//Imprimir un dato en especifico

console.log(users.user1.lastName);
