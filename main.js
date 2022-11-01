// Arrays
let lab1 = [5,5,5,5,10,10];
let lab2 = [5,5,5,5,5,5,10];
let lab3 = [5,10,10,15];
let lab4_5 = [10,5,5,5,5,5,10,10,10,10,2];
let lab6 = [5,5,10,5,5,10];
let lab8 = [5,10,10,10,5]

// Guiz
let quiz1 = 28

// Sum
function get_sum(lab) {
    let sum = 0;
for (let i = 0; i < lab.length; i++) {
  sum+=lab[i];
}
   return sum;
}

let sum1= get_sum(lab1);
let sum2= get_sum(lab2);
let sum3= get_sum(lab3);
let sum4_5= get_sum(lab4_5);
let sum6= get_sum(lab6);
let sum8= get_sum(lab8);

let sums = [sum1, sum2, sum3, sum4_5, sum6, sum8];
let total_score = (0.6*((sum1/40 + sum2/40 + sum3/40 + sum4_5/80 + sum6/40 + sum8/40)/6)) + (0.4*(quiz1/40))

function main(lab1, lab2, lab3, lab4_5, lab6, lab8) { // body of the function
  const obj={
    lab1: lab1,
    lab2: lab2,
    lab3: lab3,
    lab4_5: lab4_5,
    lab6: lab6,
    lab8: lab8,
    quiz1: quiz1,
    sums: sums,
    total_score: total_score,
  }
  return obj; }

let results= main(lab1, lab2, lab3, lab4_5, lab6, lab8)
console.log(results)
