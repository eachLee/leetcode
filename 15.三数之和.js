/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	nums.sort(function (a, b) {
		return a - b;
	});
	let arr = [];
	var len = nums.length;
	for (let n = 0; n < len; n++) {
		if (n && nums[n] === nums[n - 1]) continue;
		const ele = -nums[n];
		let [start, end] = [n + 1, len - 1];
		while (start < end) {
			let sums = nums[start] + nums[end];
			if (sums < ele) {
				start++
			} else if (sums > ele) {
				end--
			} else {
				arr.push([nums[n], nums[start], nums[end]]);
				while (nums[start] === nums[start + 1]) {
					start++
				}
				start++
				while (nums[end] === nums[end - 1]) {
					end--
				}
				end--
			}
		}
	}
	return arr;
};

