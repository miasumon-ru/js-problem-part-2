// Task -1:
// Find the lowest number in the array below.

const heights = [167, 190, 120, 165, 137];

function lowestNumber (numbers){

    let lowest = numbers[0];

    for (const number of numbers){
        if(number < lowest ){
            lowest = number;
        }
    }

    return lowest;

}

const lowest = lowestNumber (heights);
console.log('the lowest number is :', lowest);
