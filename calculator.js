
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

    if(typeof a !== 'number' || typeof b !== 'number'){
        return "please provide number"
    }
    else if( typeof a === 'undefined'){
        return 'please provide n1 number';
    }
    else if( typeof b === 'undefined'){
        return 'please provide n2 number';
    }
    else if(a < 0 || b < 0){

        return 'please provide positive number';
        
    }
   
    else{
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
        
    }
    

 

}


const result = calculator (5, 5, 'add');

console.log('the result is :', result);
