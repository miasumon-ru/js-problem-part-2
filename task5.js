/**
 * Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


 */

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    {name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary (employees){

    if(Array.isArray(employees) !== true){
        return 'please provide an array';
    }
    else{
        for (const employee of employees){
            if(typeof employee !== 'object'){
                return 'please provide an object element of array';
            }
           
        }
    }
    let sum = 0;

    for (const employee of employees){

        const totalSalary = employee.experience * employee.increment + employee.starting;

        sum = sum + totalSalary;

    }

    return sum;

    

}

const total = totalSalary (employees);
console.log('the total salary of the company is :', total);