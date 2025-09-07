/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let minn = Math.min(...strs.map((s) => s.length));
  for (let j = 0; j < minn; j++) {
    let char = strs[0][j];
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][j] !== char) return prefix;
    }
    prefix += char;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
