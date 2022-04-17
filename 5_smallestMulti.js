/*  
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? 
*/

function smallestMulti(n) {
    let totalFactors = primeFactorials(n);
    while (n > 1) {
        n--;
        const curFactors = primeFactorials(n);
        for (let key in curFactors) {
            totalFactors[key] = totalFactors[key] ? Math.max(curFactors[key], totalFactors[key]) : curFactors[key];
        }
        console.log('prod: ', factorProduct(totalFactors), ' n: ', n);
    }
    console.log('prod: ', factorProduct(totalFactors), ' n: ', n);
} 
function primeFactorials(num) {
    let res = {};
    let primes = [2,3,5,7,11,13,17,19]
    let idx = 0;
    while (idx < primes.length) {
        if (num % primes[idx] === 0) {
            const cur = res[primes[idx]];
            res[primes[idx]] = cur ? cur + 1 : 1;
            num /= primes[idx];
        } else {
            idx++
        }
    }
    return res;
}
function factorProduct(obj) {
    let prod = 1;
    for (let key in obj) {
        prod *= (key ** obj[key]);
    }
    return prod;
}
smallestMulti(20);