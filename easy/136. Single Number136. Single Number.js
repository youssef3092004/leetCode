/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in freq) freq[nums[i]]++;
    else freq[nums[i]] = 1;
  }

  for (let key in freq) {
    if (freq[key] === 1) return Number(key);
  }
};
