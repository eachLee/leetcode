/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let n = 0; n < nums.length; n++) {
		const ele = nums[n];
		if(nums.indexOf(target-ele)>n){
			return [n,nums.indexOf(target-ele)]
		}
		// for (let i = n + 1; i < nums.length; i++) {
		// 	const ele2 = nums[i];
		// 	if (ele + ele2 === target) {
		// 		return [n, i];
		// 	}
		// }
	}
};

