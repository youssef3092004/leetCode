/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sferq = {}, tferq = {};
    
    if (s.length !== t.length)
        return false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] in sferq)
            sferq[s[i]]++;
        else
            sferq[s[i]] = 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] in tferq)
            tferq[t[i]]++;
        else
            tferq[t[i]] = 1;
    }
    for (let key in sferq) {
        if (sferq[key] !== tferq[key])
            return false;
    }
    return true;
};
