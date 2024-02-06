function fullName (first , second){

    if( typeof first !== 'string'){
        return 'please provide first string data type';
    }
    else if( typeof second !== 'string'){
        return 'please provide second string data type';
    }

    const full = first + ' ' + second;

    return full;


}

// console.log(fullName('sumon', 5));


// for object validation

function getPrice (product){

    if(typeof product !== 'object'){
        return 'provide an object';
    }
    else if(!product.price){
        return 'add price property'
    }
    const price = product.price;
    return price;
}

// console.log(getPrice({name :' chulkani', price: 35, color: 'green'}));
// console.log(getPrice({name :' chulkani',  color: 'green'}));
// console.log(getPrice(5, 4));


// for validation of an array

function getSecond (numbers){

    if (Array.isArray(numbers) !== true){
        return 'please provice an array'
    }
    const second = numbers[1];
    return second;
}

// console.log(getSecond([5,7]));
console.log(getSecond(5, 7));