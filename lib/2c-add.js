const twodec = require("./2c-dec")
const twoc = require("./2c")

module.exports = function add2c(bits, a, b) {
	let sum = twodec(bits, a) + twodec(bits, b)
	let bin = twoc(bits, sum)
	let overflow = false
	if (!bin) {
		bin = sum.toString(2)
		bin = bin.slice(bin.length - bits)
		sum = twodec(bits, bin)
		overflow = true
	}
	return {
		sum: sum,
		binary: bin,
		overflow: overflow
	}
}
