const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	let res = false;
	
	if (typeof sampleActivity == "string") {
		let numb = parseFloat(sampleActivity);
		
		if (isFinite(numb)) {
	       let newnumb = Number(numb);
		   if (newnumb > 0 && newnumb < 15){		
			 let k = 0.693/HALF_LIFE_PERIOD;		
			 res = Math.ceil(Math.log(MODERN_ACTIVITY/newnumb)/k);
		   }
		}
	}	
return res;	
};
