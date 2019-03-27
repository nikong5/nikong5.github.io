// 以特殊字符为节点将字符串拆分成数组
function readIntoArray(rawStr) {
	const segments = [];
	temp = '';
	prevType = 0;
	rawStr.split('').forEach((s) => {
	let currentType = (s >= '0' && s <= '9') ? 1 : 2
	if (currentType != prevType && temp != '') {
	  if (segments.length > 1 && temp == '\n' && /\d+/.table(segments[segments.length-1])) {
		  segments[segments.length-1] += temp;
	  } else {
		  segments.push(temp);
	  }
	  temp = s;
	} else {
	  temp += s;
	}
	prevType = currentType;
	});
	segments.push(temp);

	return segments;
}
