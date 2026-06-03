// function greet(){
//         console.log("Hello CSE 22");            
// }

// let greetFunction = () => {
//     console.log("Hello CSE 22");
// }
// console.log(greetFunction);

// arrow function with single parameters
let square = x => x*x;
console.log(square(4));

//arrow function with one parameters
const greetUser = (name) => {
    console.log(`Hello, ${name}`);    
}
greetUser("Alice");

//map on array ---> changes value of each index in a new array
let newarray = [1, 2, 3, 4, 5];
let squaredArray = newarray.map((num) => num*num);
console.log(squaredArray);

// let sum = (n1,n2) => {
//     return n1+n2;
// }

// console.log(sum(2,3));
// const sum = (a,b) => (a+b)
// console.log(sum(2,3));

//filter on array
let evenNumbers = [1, 2, 3, 4, 5]
let filteredEle = evenNumbers.filter((num)=> num%2 === 0)
console.log(filteredEle);

//reduce on array
let s = [1, 2, 3, 4, 5]
let total = s.reduce((accumulator,currentValue) => accumulator + currentValue, 0)
console.log(total);

let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
]
let displayMarks = students.map((val) => val.marks)
let displayNames = students.map((n) => n.name)
console.log(displayMarks);
console.log(displayNames);
let totalMarks = students.reduce((init,total) => init + total.marks, 0)
console.log(totalMarks);
