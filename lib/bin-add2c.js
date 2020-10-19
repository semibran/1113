const twos = require("./bin-2c")

module.exports = function add2c(bits, a, b) {
	if (a + b < Math.pow(2, bits - 1)) {
		return { sum: a + b, overflow: false }
	}
	let sum = a + b - Math.pow(2, bits)
	return {
		sum: sum,
		binary: twos(8, sum),
		overflow: true
	}
}
