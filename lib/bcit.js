const bias = require("./bias")
const pad = require("./pad")
const dectofloat = require("./float")

module.exports = function bcit(num) {
	num = Number(num)
	if (num ==  Infinity) return { sign: "0", exponent: "1111", mantissa: "00000", loss: "", hbit: null }
	if (num == -Infinity) return { sign: "1", exponent: "1111", mantissa: "00000", loss: "", hbit: null }
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
		return { sign, mantissa, exponent, loss, hbit: null }
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
		let target = bits.indexOf("1") + 1
		while (radix < target && expo > -6) {
			radix++
			expo--
		}
	}

	let mantissa = pad.right(5, bits.slice(radix, radix + 5))
	let loss = bits.slice(radix + 5)
	let exponent = "0000"
	let hbit = "0"
	if (expo > -6) {
		exponent = pad.left(4, bias(7, expo))
		hbit = null
	}

	return { sign, mantissa, exponent, loss, hbit }
}
