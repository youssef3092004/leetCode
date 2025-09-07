/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z]/g, "");
    rev = s.split("").reverse().join("");
    return s === rev;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
