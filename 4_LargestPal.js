/* 
    A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    Find the largest palindrome made from the product of two 3-digit numbers.
 */

function largestPal() {
    let high = 999;
    let low = high;
    let max = 0;
    while (high > 0) {
        low = high;
        while (low > 0) {
            const prod = high * low;
            if (isNumPal(prod)) {
                max = Math.max(max, prod);
            } 
                low--;
        }
        high--;
    }
    return max;
}
function isNumPal(int) {
    const str = int.toString();
    for(let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - 1 -i]) return false;
    }
    return true;
}
console.log(largestPal());