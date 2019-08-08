/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	var minus = x < 0;
	x =Math.abs(x) + '';
	let reverseNum = (x.split('').reverse().join(''))/1;
	if (minus) {
		reverseNum = -reverseNum;
	}
	if (reverseNum > (Math.pow(2, 31) - 1) || reverseNum < (Math.pow(-2, 31))) {
		return 0;
	}
	return reverseNum;
};

