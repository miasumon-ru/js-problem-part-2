
const jim = 40;
const tim = 70;
const kim = 60;


function maxOfThree (jim, tim, kim){

    if(jim>tim && jim > kim){
        console.log('jim is the bos');
    }
    else if( tim > jim && tim > kim){
        console.log('tim is the bos');
    }
    else{
        console.log('kim is the bos');
    }



}

maxOfThree(jim, tim, kim);