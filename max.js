// Can you find out who will get the delicious cake ?

const disha = 56;
const salman = 79;

if (disha > salman){
    console.log( 'Disha will get the cake');
}
else{
    console.log('salman will get the cake');
}

// inside a function

function getMax (num1, num2){
    if(num1 > num2){
        return num1;

    }
    else {
        return num2;
    }
}

const max = getMax(40,75);

console.log(max);
