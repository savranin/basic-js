module.exports = class DepthCalculator {
	constructor() {
        return this;
    }
	
    calculateDepth(arr) {
		let sum = 1;
		for (let element of arr) {
			let prom = 1;
			if (Array.isArray(element) == true) {
				prom = prom + this.calculateDepth(element);
			}
			sum = Math.max(sum, prom);
		}
	return sum;
    }
};