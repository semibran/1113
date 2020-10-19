const bias = require("./bias")
const pad = require("./pad")
const dectofloat = require("./float")

module.exports = function bcit(num) {
	num = Number(num)
	if (num ==  Infinity) return { sign: "0", exponent: "1111", mantissa: "00000", normalized: true, loss: null }
	if (num == -Infinity) return { sign: "1", exponent: "1111", mantissa: "00000", normalized: true, loss: null }
	let sign = "0"
	if (num < 0) {
		sign = "1"
		num = -num
	}

	if (Math.trunc(num) === num) {
		let intbin = parseFloat(num).toString(2)
		let intbits = intbin.length
		let exponent = bias(7, intbits - 1)
		let mantissa = pad.right(5, intbin.slice(1, 6))
		let loss = intbin.slice(6)
		let normalized = true
		return { sign, mantissa, exponent, normalized, loss }
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

	let mantissa = pad.right(5, bits.slice(radix, radix + 5))
	let loss = bits.slice(radix + 5)
	let exponent = "0000"
	let normalized = false
	if (expo > -6) {
		exponent = bias(7, expo)
		normalized = true
	}

	return { sign, mantissa, exponent, normalized, loss }
}
