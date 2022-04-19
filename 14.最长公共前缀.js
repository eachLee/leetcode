/**
 * @param {string[]} strs
 * @return {string}
 */

var strs = ["reflower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
	//只有一个值的时候 直接返回
	if (strs.length === 1) {
		return strs[0];
	}
	//进行长短排序 减少循环次数
	strs = strs.sort((a, b) => a.length - b.length)
	let sortStr = strs[0]
	let strsLen = sortStr.length;
	let prefixStr = '',
		flag;
	if (!strsLen) return '';
	while (!flag) {
		prefixStr = sortStr.slice(0, prefixStr.length + 1);
		flag = strs.find((item) => {
			if (!item.startsWith(prefixStr)) {
				return true;
			} else {
				return false;
			}
		})
		if (!flag && prefixStr === sortStr) {
			return prefixStr;
		}
	}
	return prefixStr.slice(0, -1);
	//下面为解法二
	// for (let i = 0; i <= strsLen; i++) {
	// 	prefixStr = sortStr.slice(0, i + 1);
	// 	flag = strs.find((item) => {
	// 		if (!item.startsWith(prefixStr)) {
	// 			return true;
	// 		} else {
	// 			return false;
	// 		}
	// 	})
	// 	if (flag) {
	// 		return prefixStr.slice(0, -1);
	// 	} else {
	// 		if (i === strsLen) {
	// 			return prefixStr;
	// 		}
	// 	}
	// }
};