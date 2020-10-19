const unpkg = require("./bcit-unpkg")
const std = require("./bcit-std")
const str = require("./bcit-str")
const bcit = require("./bcit")
const bcitdec = require("./bcit-dec")
const todec = require("./dec")
const bias = require("./bias-dec")

module.exports = function bcitadd(a, b) {
	let float1 = unpkg(a)
	let float2 = unpkg(b)
	let sign1 = float1.sign === "1" ? -1 : 1
	let sign2 = float2.sign === "1" ? -1 : 1
	let expo1 = bias(7, float1.exponent)
	let expo2 = bias(7, float2.exponent)
	let expo = 0
	let exponent = "0000"
	if (expo1 < expo2) {
		expo = expo2
		exponent = float2.exponent
		float1 = std(expo, a)
	} else if (expo2 < expo1) {
		expo = expo1
		exponent = float1.exponent
		float2 = std(expo, b)
	}
	let str1 = (float1.hbit || "1") + "." + float1.mantissa
	let str2 = (float2.hbit || "1") + "." + float2.mantissa
	let std1 = float1.sign + " " + exponent + " " + str1
	let std2 = float2.sign + " " + exponent + " " + str2
	let num1 = todec(2, str1) * sign1
	let num2 = todec(2, str2) * sign2
	let sumdec = (num1 + num2) * Math.pow(2, expo)
	let sumbcit = bcit(sumdec)
	let sumstr = str(sumbcit)
	let sum = bcitdec(sumstr)
	let loss = num1 * Math.pow(2, expo) + num2 * Math.pow(2, expo) - sum
	return {
		std: [ std1, std2 ],
		sum: sumstr,
		dec: sum,
		loss: loss
	}
}
