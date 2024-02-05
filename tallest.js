

// find the max number in an array

const height = [ 65,66,68,72,78,60];

function getMax (numbers){

    let max = numbers[0];

    for(const number of numbers){

        if(number>max){
            max = number;
        }

    }

    return max;

}

const max = getMax(height);
console.log(max);