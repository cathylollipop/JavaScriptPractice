	function flattenArray(arr, res){
		arr.forEach(item => {
			if(item.constructor === Array){
				flattenArray1(item, res);
			}else{
				res.push(item);
			}
		});
		return res;
	}

	// 指定深度的数组扁平化
	function flattenDepth(array, depth = 1) {
	  let result = [];
	  array.forEach(item => {
	    let d = depth
	    if (Array.isArray(item) && d > 0) {
	      result.push(...(flattenDepth(item, --d)));
	    } else {
	      result.push(item)
	    }
	  });

	  return result;
	}



	Ref: http://mp.weixin.qq.com/s/hFP0EgV5EN0cWBuuCPZi3w