const unpack = require("./bcit-unpkg")
const bias = require("./bias-dec")

module.exports = function bcitstd(exponent, str) {
	if (exponent < -6 || exponent > 8) {
		throw new Error("Failed to standardize bitstring: Exponent " + exponent + " is out of range")
	}
	let float = unpack(str)
	let m = float.exponent === "0000" ? 0 : 1 + float.mantissa
	let e = bias(7, float.exponent)
	while (e < exponent) {
		// adjust mantissa (move radix point left)
		m = "0" + m
		e++
	}
	let mantissa = m.slice(1, 6)
	let loss = m.slice(6)
	return { sign: float.sign, exponent: exponent, mantissa: mantissa, loss: loss }
}
