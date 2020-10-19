const bias = require("./bias-dec")
const todec = require("./dec")

module.exports = function bcittodec(float) {
	float = unpack(float)
	let sign = Number(float.sign) ? -1 : 1
	if (float.exponent === "1111") return Infinity * sign
	let exponent = float.exponent === "0000" ? -6 : bias(7, float.exponent)
	let hiddenbit = float.exponent === "0000" ? 0 : 1
	let mantissa = todec(2, hiddenbit + "." + float.mantissa)
	return sign * Math.pow(2, exponent) * mantissa
}

function unpack(str) {
	return {
		sign: str[0],
		exponent: str.slice(1, 5),
		mantissa: str.slice(5, 10)
	}
}
