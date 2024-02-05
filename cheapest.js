
// find the cheapest phone from an array of phone object

const  mobiles = [

    {name : 'samsung', price : 20000, color : 'black' , camera : '12 mg'},
    {name : 'xiomi', price : 18000, color : 'black' , camera : '12 mg'},
    {name : 'oppo', price : 30000, color : 'black' , camera : '12 mg'},
    {name : 'iphone', price : 100000, color : 'black' , camera : '12 mg'},
    {name : 'walton', price : 31000, color : 'black' , camera : '12 mg'},
    {name : 'htc', price : 27000, color : 'black' , camera : '12 mg'},


]


function getCheapestObject (phones){

    let cheapest = phones[0];

    for (const phone of phones){
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }

    return cheapest;
}

console.log( 'the cheapest phone is :',  getCheapestObject(mobiles));