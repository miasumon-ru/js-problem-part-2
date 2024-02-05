// Task -2:
// Find the friend with the smallest name.

const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName (names){

    let smallName = names[0];
    // console.log(length);

    for (const name of names){
        if(name.length < smallName.length){
            smallName = name;
        }
    }
    
    return smallName;



}

const smallName = smallestName (heights);

console.log('the smallest name is :', smallName);



