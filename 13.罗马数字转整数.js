/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	let roman = ['I','V','X','L','C','D','M'];
	let num =  [1,5,10,50,100,500,1000];
	let arr = [];
	let gentle = 0;
	if(s.indexOf('IV')>-1){
		s = s.replace('IV','');
		arr.push(4);
	}
	if(s.indexOf('IX')>-1){
		s = s.replace('IX','');
		arr.push(9);
	}
	if(s.indexOf('XC')>-1){
		s = s.replace('XC','');
		arr.push(90);
	}
	if(s.indexOf('XL')>-1){
		s = s.replace('XL','');
		arr.push(40);
	}
	if(s.indexOf('CD')>-1){
		s = s.replace('CD','');
		arr.push(400);
	}
	if(s.indexOf('CM')>-1){
		s = s.replace('CM','');
		arr.push(900);
	}
	for (let i = 0; i < s.length; i++) {
		const str = s[i];
		arr.push(num[roman.indexOf(str)]);
	}
	for (let n = 0; n < arr.length; n++) {
		const num = arr[n];
		gentle+=num;
	}
	return gentle;	
};

