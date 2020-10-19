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
	} else {
		let data = dectofloat(2, num)
		let frac = data.frac
		let exp = 0
		while (frac.length > 5 && exp > -6) {
			frac = frac.slice(1)
			exp--
		}
		if (exp > -6) {
			float.exp = bias(7, exp)
		}
		let mantissa = frac.slice(0, 5)
		float.mantissa = pad.right(5, mantissa)
		let loss = frac.slice(5)
		if (loss.length) {
			float.loss = loss
		}
	}

	return float
}
