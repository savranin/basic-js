module.exports = function transform(arr) {
if (Array.isArray(arr) != true) {
	throw new Error("This is not array!");
}
	
newarr =[];

for (let i = 0; i < arr.length; i++) {
let elem = arr[i];
	if (arr[i] ==  '--discard-next') {
	
	
	}
	else if (arr[i] == '--discard-prev') {

	}
	else if (arr[i] == '--double-next') {
		if (i == arr.length-1) {
			
		}
		else {
			newarr.push(arr[i+1]);	
		}
	}
	else if (arr[i] == '--double-prev') {
		if (i > 0) {
			newarr.push(arr[i-1]);
		}
	}
	else {
		if (arr[i+1] == '--discard-prev') {
		
		}
		else if (arr[i-1] == '--discard-next') {
		
		}
		else if (arr[i+1] == '--double-prev') {
			newarr.push(arr[i]);				
		}

		else {
			newarr.push(arr[i]);	
		}
	}
}


return newarr;
};
