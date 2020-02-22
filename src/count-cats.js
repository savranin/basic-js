module.exports = function countCats(arr) {
	let res = 0;

	for (let row of arr) {
		for (let element of row){
			if (element == '^^'){
				res = res + 1;
			}
		}
	}
	
return res;
};
