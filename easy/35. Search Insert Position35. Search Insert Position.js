/**
 *  * @param {number[]} nums
 *   * @param {number} target
 *    * @return {number}
 *     */
var searchInsert = function(nums, target) {
	    let l = 0, r = nums.length - 1;
	    while (l <= r) {
		            let mid = Math.floor((l + r) / 2);
		            if (nums[mid] === target) return mid;
		            else if (target > nums[nums.length - 1]) return nums.length;
		            else if (target < nums[0]) return 0;
		            else if (nums[mid] < target) l = mid + 1;
		            else if (nums[mid] > target) r = mid - 1;
		        }
	    return l;
/bin not found
