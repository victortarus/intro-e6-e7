/Template literals/
let name1 = "hello";
let name2 = "world";
let num1 = 2;
let num2 = 4;
//using backticks
const addNumbers = `${num1 +num2}`;
console.log(addNumbers)
    //const fullName = `${name1} ${name2}`;
    //console.log(fullName);
let example = `${name1 }
 ${name2}`;
document.getElementById('example').innerText = example;