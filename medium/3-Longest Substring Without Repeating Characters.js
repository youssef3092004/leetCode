/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set  = {};
    let max_size = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] in set) {
            start = Math.max(start, set[s[i]] + 1)
            set[s[i]] = i
        }
        set[s[i]] = i;
        max_size = Math.max(max_size , i - start + 1);
    }
    return max_size;
};
