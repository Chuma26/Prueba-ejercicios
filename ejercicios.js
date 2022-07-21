const pizza = 'familiar';
let precio = 0;

function pizzaPrice(pizzaSize){
    if(pizzaSize ==='pequeña'){
        console.log(`La pizza ${pizzaSize} cuesta $10`);
    }else if(pizzaSize ==='mediana'){
        console.log(`La pizza ${pizzaSize} cuesta $18`);
    }else if(pizzaSize ==='grande'){
        console.log(`La pizza ${pizzaSize} cuesta $25`);
    }else if(pizzaSize =='familiar'){
        console.log(`La pizza ${pizzaSize} cuesta $30`);
    } else {
        console.log(`La pizza seleccionada no esta disponible`);
    }
}

//pizzaPrice(pizza);
pizzaPrice('familiar');
pizzaPrice('grande');