/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let list = [];
     if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
     }

    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        if(index !== -1) {
            list.push(nums1[i]);
            nums2.splice(index, 1);
        }
    }

    return list;
};
