module.exports = function repeater(str, options) {
    let res       = str;
	let separator = '+';
	let addition  = '';
	let additionSeparator = '';
	
	if ("separator" in options) {
		separator = options.separator;
	}
	if ("additionSeparator" in options) {
		additionSeparator = options.additionSeparator;
	}	
	if ("addition" in options) {
		addition = options.addition;	
		if ("additionRepeatTimes" in options) {
			if ((typeof options.additionRepeatTimes === "number") && options.additionRepeatTimes > 1) {
				let promAddition = '';
				for (let x = 1; x <= options.additionRepeatTimes; x++) {
					if (x == options.additionRepeatTimes) {
						promAddition = promAddition + addition;
					}
					else {
						promAddition = promAddition + addition + additionSeparator;
					}
				}
				if (promAddition != '') {
				addition = promAddition;
				}				
			}			
		}
	}	
    if ("repeatTimes" in options) {
		if (typeof options.repeatTimes === "number" && options.repeatTimes > 1) {	
			for (let i = 1; i <= options.repeatTimes; i++) {
				if (i == options.repeatTimes) {
					res = res + addition;
				}
				else {
					res = res + addition + separator + str;
				}
			}
		}
		else {
			res = res + addition;		
		}
    }
	

    return res;
};