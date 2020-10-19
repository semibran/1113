const pad = require("./bin-pad")

module.exports = function bias(bits, dec) {
	let max = Math.pow(2, bits - 1) - 1
	if (dec < -max - 1) return null
	if (dec > max) return null
	if (dec == 0) return pad(bits)
	return pad(bits, (Number(dec) + max).toString(2))
}
