const bias = require("./bias")
const pad = require("./pad")
const dectofloat = require("./float")

module.exports = function bcit(num) {
	num = Number(num)
	if (num ==  Infinity) return { sign: "0", exponent: "1111", mantissa: "00000", loss: 0 }
	if (num == -Infinity) return { sign: "1", exponent: "1111", mantissa: "00000", loss: 0 }
	let float = { sign: "0", exponent: "0000", mantissa: "00000", loss: 0 }
	if (num < 0) {
		float.sign = "1"
		num = -num
	}
	if (Math.trunc(num) === num) {
		let intbin = parseFloat(num).toString(2)
		let intbits = intbin.length
		let exponent = intbits - 1
		float.exponent = bias(7, exponent)

		let mantissa = intbin.slice(1, 6)
		float.mantissa = pad.right(5, mantissa)

		let loss = intbin.slice(6)
		if (loss.length) {
			float.loss = parseInt(loss, 2)
		}
		return float
	}

	let data = dectofloat(2, num)
	let bits = data.int + data.frac
	let radix = data.int.length
	let expo = 0
	if (radix > 1) {
		while (radix > 1 && expo < 8) {
			radix--
			expo++
		}
	} else {
		while (bits.length > 5 && expo > -6) {
			bits = bits.slice(1)
			expo--
		}
		radix = 1
	}

	if (expo > -6) {
		float.exponent = bias(7, expo)
	}

	let mantissa = bits.slice(radix, radix + 5)
	float.mantissa = pad.right(5, mantissa)

	let loss = bits.slice(radix + 5)
	for (let i = 0; i < loss.length; i++) {
		let value = expo - mantissa.length - i - i
		if (loss[i]) {
			float.loss += Math.pow(2, value)
		}
	}

	return float
}
