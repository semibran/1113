const unpkg = require("./bcit-unpkg")
const bias = require("./bias-dec")
const todec = require("./dec")

module.exports = function bcitdec(float) {
	float = unpack(float)
	let sign = Number(float.sign) ? -1 : 1
	if (float.exponent === "1111") return Infinity * sign
	let exponent = float.exponent === "0000" ? -6 : bias(7, float.exponent)
	let hiddenbit = float.hbit || float.exponent === "0000" ? 0 : 1
	let mantissa = todec(2, hiddenbit + "." + float.mantissa)
	return sign * Math.pow(2, exponent) * mantissa
}
