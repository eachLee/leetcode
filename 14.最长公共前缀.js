/**
 * @param {string[]} strs
 * @return {string}
 */

var strs = ["reflower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
	strs = strs.sort((a, b) => a.length - b.length)
	let sortStr = strs[0]
	let strsLen = sortStr.length;
	if (!strsLen) return '';
	for (let i = 0; i <= strsLen; i++) {
		let prefixStr = sortStr.slice(0, i);
		if (i === 0) {
			prefixStr = sortStr.charAt(0)
		}
		//判断只有一个的时候 直接返回
		if (strs.length === 1) {
			return strs[0];
		}
		let flag = strs.every((item) => {
			if (item.startsWith(prefixStr)) {
				return true;
			} else {
				return false;
			}
		})
		if (!flag) {
			if (i === 0) {
				return "";
			}
			return prefixStr.slice(0, -1);
		} else {
			if (i === strsLen) {
				return prefixStr;
			}
		}
	}
};