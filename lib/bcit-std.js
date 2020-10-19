const unpkg = require("./bcit-unpkg")
const biasdec = require("./bias-dec")
const bias = require("./bias")
const pad = require("./pad")

module.exports = function bcitstd(exponent, str) {
	if (exponent < -6 || exponent > 7) {
		throw new Error("Failed to standardize bitstring: Exponent " + exponent + " is out of range")
	}
	let float = unpkg(str)
	let sign = float.sign
	let m = (float.exponent === "0000" ? 0 : 1) + float.mantissa
	let e = float.exponent === "0000" ? -6 : biasdec(7, float.exponent)
	while (e < exponent) {
		// adjust mantissa (move radix point left)
		m = "0" + m
		e++
	}
	while (e > exponent) {
		m = m + "0"
		e--
	}
	exponent = pad.left(4, bias(7, exponent))
	let hbit = m[0]
	let mantissa = pad.right(5, m.slice(1, 6))
	let loss = m.slice(6)
	return { sign, exponent, mantissa, hbit, loss }
}
