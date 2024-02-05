
//  use add and multiplication to calculate wood requirements

/**
 * chair = 3 feet
 * table = 10 feet 
 * bed = 50 feet
 * 
 */

function woodQuantity (chairQuantity, tableQuantity , bedQuantity){

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = perChairWood * chairQuantity;
    const totalTableWood = perTableWood * tableQuantity;
    const totalBedWood = perBedWood * bedQuantity;

    const total = totalChairWood + totalTableWood + totalBedWood;

    return total;
}

// const wood = woodQuantity (4,2 , 3);
const wood = woodQuantity (0 , 0, 3);

console.log(wood, ' cft');

