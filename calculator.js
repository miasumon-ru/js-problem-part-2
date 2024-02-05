
// simple calculator to call inside a function

function add (n1, n2){

    const result = n1 + n2;

    return result;
}

function subtract ( n1, n2){
    const result = n1 - n2;
    return result;
}
 
function multiply ( n1 , n2){
    const result = n1 * n2;
    return result;
}

function divide (n1, n2){
    const result = n1 / n2;
    return result;
}

//  calculator function

function calculator (a, b , operator){

    if ( operator === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operator === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if (operator === 'multiply'){

        const result = multiply(a, b);
        return result;
        
    }
    else if (operator === 'divide'){
        const result = divide(a, b);
        return result;
    }
    else{
        console.log("please provide 'add' or 'subtract' or 'multiply' or 'divide' operator ");
    }

}


const result = calculator (5, 7, 'add');

console.log('the result is :', result);
