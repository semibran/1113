const unpkg = require("./bcit-unpkg")
const biasdec = require("./bias-dec")
const bias = require("./bias")

module.exports = function bcitstd(exponent, str) {
	if (exponent < -6 || exponent > 7) {
		throw new Error("Failed to standardize bitstring: Exponent " + exponent + " is out of range")
	}
	let float = unpkg(str)
	let sign = float.sign
	let m = float.exponent === "0000" ? 0 : 1 + float.mantissa
	let e = biasdec(7, float.exponent)
	while (e < exponent) {
		// adjust mantissa (move radix point left)
		m = "0" + m
		e++
	}
	exponent = bias(7, exponent)
	let hbit = m[0]
	let mantissa = m.slice(1, 6)
	let loss = m.slice(6)
	return { sign, exponent, mantissa, hbit, loss }
}
