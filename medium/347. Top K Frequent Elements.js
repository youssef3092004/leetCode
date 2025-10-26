/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = {};

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let higher = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

    return higher.slice(0, k).map(Number);
};
