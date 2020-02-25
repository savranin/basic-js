class VigenereCipheringMachine {
	
	constructor(direct = true) {
        this.current = direct;
        return this;
    }
	
	encrypt_decrypt(message, key, isToCrypt) {
		if (message === undefined || key === undefined) {
			throw new Error;
		}
			
		message = message.toUpperCase();
		key     = key.toUpperCase();
		let keyL    = key.length;
	
		let res = '';
		let x = 0;
		for (let i = 0; i < message.length; i++) {
			let codeM = message[i].codePointAt(0);
			if (codeM >= 65 && codeM <= 90) {
				if (x > keyL - 1) {
					x = 0;
				}
				let codeKey = key[x].codePointAt(0);
				x++;

				let ost = 0;
				if (isToCrypt) {
					ost = (((codeM - 65) + (codeKey - 65)) % 26) + 65;
				}
				else {
					ost = ((codeM - 65) - (codeKey - 65) + 26) % 26 + 65;			
				}	
				res = res + String.fromCodePoint(ost);			
			}
			else {
				res = res + message[i];		
			}
		}
		
		if (this.current) {
			return res;
		}
		else {
			return res.split("").reverse().join("");
		}	
	}
	
	
    encrypt(message, key) {
        return this.encrypt_decrypt(message, key, true);
    }

    decrypt(message, key) {
        return this.encrypt_decrypt(message, key, false);
    }
}

module.exports = VigenereCipheringMachine;
