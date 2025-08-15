/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let frequency = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in frequency) {
            frequency[nums[i]]++
            return true;
        }
        else {
            frequency[nums[i]] = 1;
        }
    }
    return false;
};
