const bias = require("./bin-bias")
const pad = require("./bin-pad").right

module.exports = function bcit(num) {
	if (num ==  Infinity) return { sign: "0", exponent: "1111", mantissa: "00000", loss: 0 }
	if (num == -Infinity) return { sign: "1", exponent: "1111", mantissa: "00000", loss: 0 }
	let float = { sign: "0", exponent: "0000", mantissa: "00000", loss: 0 }
	if (num < 0) {
		float.sign = "1"
		num = -num
	}
	let intbin = parseFloat(num).toString(2)
	let intbits = intbin.length
	let exponent = intbits - 1
	float.exponent = bias(7, exponent)

	let mantissa = intbin.slice(1, 6)
	float.mantissa = pad(5, mantissa)

	let loss = intbin.slice(6)
	if (loss.length) {
		float.loss = loss
	}
	return float
}
