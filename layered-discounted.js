
/**
 * upto > 100 > 100tk
 * 101 - 200 > 90 tk
 * more than 200 > 70tk
 */


function layeredDiscounted (quantity){

    const first100Price = 100;
    const second200Price = 90
    const above200 = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){

        const first100Total = first100Price * 100;
        const remainingQuantity = quantity - 100;

        const remainingTotal = second200Price * remainingQuantity;

        const total = first100Total + remainingTotal;

        return total;

    }
    else{
        const first100Total = first100Price * 100;
        const second200Total = second200Price * 100;

        const remainingQuantity = quantity - 200;

        const remainingTotal = remainingQuantity * 70;

        const total = first100Total + second200Total + remainingTotal;

        return total;

    
    }


}

const total = layeredDiscounted (209);

console.log('the layered discounted total is :', total);
