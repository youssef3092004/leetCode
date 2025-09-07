/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let freq = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in freq) {
            if (Math.abs(freq[nums[i]] - i) <= k) // abs(0 - 2) 3
                return true;
            else
                freq[nums[i]] = i;
        }
        else {
            freq[nums[i]] = i;
        }
    }
    return false;
};
