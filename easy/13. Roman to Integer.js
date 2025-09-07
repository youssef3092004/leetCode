/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanList = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM', 'I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let valueList = [4, 9, 40, 90, 400, 900, 1, 5, 10, 50, 100, 500, 1000];
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      // i = 1
      let twoRoman = i + 1 < s.length ? s[i] + s[i + 1] : null;
      let indx = romanList.indexOf(twoRoman);
      if (indx !== -1) {
        result += valueList[indx];
        i++; // skip next char
      } else {
        let indx = romanList.indexOf(s[i]); // M
        result += valueList[indx]
      }
    }
  return result;
};

console.log(romanToInt("MCMXCIV"));
