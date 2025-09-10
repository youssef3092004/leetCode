/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let x = 0;
    for (let i = 0; i < digits.length; i++) {
        x = x * 10 + digits[i];
    }
    x += 1;
    x = x.toString().split('')
    return x
};
console.log(plusOne([1,2,3]));
