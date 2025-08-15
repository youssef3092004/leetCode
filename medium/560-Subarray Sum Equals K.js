/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0,
    max_subArray = 0,
    hashmap = { 0: 1 }; // we initialize the hashmap with 0 and 1 bec. if the sub array like : 3 and the k 3 that mean if i 3 - 3 will give me a 0
  for (let i = 0; i < nums.length; i++) {
    max_subArray += nums[i];
    if (max_subArray - k in hashmap) {
      count += hashmap[max_subArray - k];
    } else {
      hashmap[max_subArray] = (hashmap[max_subArray] || 0) + 1;
    }
  }
  return count;
};
