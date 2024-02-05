

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice (products){

    let total = 0;

     for(const product of products){
        total = total + product.price;
     }

     console.log('the total price of products is :', total);

     const length = products.length;

     console.log('the length of the products is :', length);

     const average = total / length;

     return average;

    
}

const avg = findAveragePhonePrice (phones);
console.log('the average is : ', avg);