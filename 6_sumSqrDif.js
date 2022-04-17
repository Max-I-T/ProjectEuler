/* 
    The sum of the squares of the first ten natural numbers is,

    The square of the sum of the first ten natural numbers is,

    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
let sum = 0;
let sumSqr = 0
for (let i = 1; i <= 100; i++) {
    sum += i;
    sumSqr += i**2;
}
const sqrSum = sum ** 2;
console.log(sqrSum - sumSqr);