
/**
 * upto > 100 > 100tk
 * 101 - 200 > 90 tk
 * more than 200 > 70tk
 */

// overall discount if quantity is surpassed

function discounted (quantity){
    if(quantity <= 100 ){

        const total = quantity * 100;
        return total;

    }
    else if (quantity <= 200){

        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

const total = discounted (201);

console.log( 'the total is : ', total);