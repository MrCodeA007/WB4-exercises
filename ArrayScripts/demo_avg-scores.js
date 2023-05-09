//1. Set up variables and array
let myScores = [92,98,84,76,89,99,100]; // An array stores multiple values in a single variable.
let yourScores = [82,98,94,88,92,100,100]; 

//2. set function and set parameter (average = adding up all numbers in the array and dividing by length)
function getAverage(scores) {

let sum = 0; //the sum of when we add up all numbers in an array

//counter set on line 9 - i++ adds 1
for (let i=0; i<scores.length; i++){
sum += scores[i];
}
//set average variable
const average = sum/scores.length;
return average;
}

const myAverage = getAverage(myScores);
console.log(myAverage);
const yourAverage = getAverage(yourScores);
console.log(yourAverage);