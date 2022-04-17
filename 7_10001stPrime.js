/* 
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number? 
*/

const arr = Array(150000).fill(0).map((num,idx) => idx + 2);
let primes = [1];
let idx = 0;
while (arr.length > 0) {
    idx = 0;
    const cur = arr.shift();
    primes.push(cur);
    while(idx < arr.length) {
        if (arr[idx] % cur === 0) {
            arr.splice(idx, 1);
        } else {
            idx++;
        }
    }
    if(primes.length % 50 === 0) {
        console.log(primes[primes.length-1]);
    }
}
console.log(primes);
console.log('length: ', primes.length - 1);
console.log('the 10,001st prime is: ', primes[10001]);