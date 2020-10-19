const unpkg = require("./bcit-unpkg")
const std = require("./bcit-std")
const bcit = require("./bcit")
const todec = require("./dec")
const bias = require("./bias-dec")

module.exports = function bcitadd(a, b) {
	let float1 = unpkg(a)
	let float2 = unpkg(b)
	let expo1 = bias(7, float1.exponent)
	let expo2 = bias(7, float2.exponent)
	let expo = 0
	if (expo1 < expo2) {
		expo = expo2
		float1 = std(expo, a)
	} else if (expo2 < expo1) {
		expo = expo1
		float2 = std(expo, b)
	}
	let str1 = (float1.hbit || "1") + "." + float1.mantissa
	let str2 = (float2.hbit || "1") + "." + float2.mantissa
	let num1 = todec(2, str1)
	let num2 = todec(2, str2)
	let sum = num1 + num2
	return bcit(sum * Math.pow(2, expo))
}
