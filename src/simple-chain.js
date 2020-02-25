const chainMaker = {
  arr: [],

  getLength() {
	return this.arr.length;
  },
  addLink(value) {
	this.arr.push('( ' + String(value) + ' )');
    return this;
  },
  removeLink(position) {	
	if (isNaN(+position) || position == '' || this.arr[position] === undefined) {
         this.arr = [];
         throw new Error();
    }	
	this.arr.splice(position-1,1);  
	return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = '';
	for (let i = 0; i < this.arr.length; i++){
		if (i == this.arr.length-1) {
			res = res + this.arr[i]; 
		}
		else {
			res = res + this.arr[i] + '~~';
		}
	}
	this.arr = [];
	return res;
  }
};

module.exports = chainMaker;
