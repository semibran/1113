const pad = require("./bin-pad")

module.exports = function xs(bits, dec) {
	let max = Math.pow(2, bits - 1) - 1
	if (dec < -max - 1) return null
	if (dec > max) return null
	if (dec == 0) return pad(bits)
	let xsmask = Math.pow(2, bits - 1)
	if (dec > 0) return pad(bits, Number(dec ^ xsmask).toString(2))
	let mask = Math.pow(2, bits) - 1
	let xs = (((-dec) ^ mask) + 1) ^ xsmask
	return pad(bits, xs.toString(2))
}
