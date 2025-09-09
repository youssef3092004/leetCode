/**
 *  * @param {string} s
 *   * @return {number}
 *    */
var lengthOfLastWord = function(s) {
	    let x = s.trim().split(" ");
	    let y = x[x.length - 1];
	    return y.length;
};
