const twos = require("./bin-2c")

module.exports = function add2c(bits, a, b) {
	if (a + b < Math.pow(2, bits - 1)) {
		return {
			sum: a + b,
			binary: twos(bits, sum),
			overflow: false
		}
	}
	let max = Math.pow(2, bits)
	let sum = (a + b) % max - max
	return {
		sum: sum,
		binary: twos(bits, sum),
		overflow: true
	}
}
