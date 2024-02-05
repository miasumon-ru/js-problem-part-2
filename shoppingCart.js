// calculate the total cost of the products in a shopping cart

const products = [
    {name : 'shampo', price : 30  , quantity : 2},
    {name : 'chiruni',price : 100 , quantity : 3},
    {name : 'shirt', price : 700  , quantity : 5},
    {name : 'pant', price : 1200  , quantity : 1},
]


function getTotal (products){

     let sum = 0;

    for(const product of products){

        const totalProductPrice = product.price * product.quantity;

        sum = sum + totalProductPrice;
    }

    return sum;
}

const total = getTotal (products);

console.log('the total is :', total);