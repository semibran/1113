const pad = require("./bin-pad")

module.exports = function twos(bits, dec) {
	let max = Math.pow(2, bits - 1) - 1
	if (dec < -max - 1) return null
	if (dec > max) return null
	if (dec == 0) return pad(bits)
	if (dec > 0) return pad(bits, Number(dec).toString(2))
	let mask = Math.pow(2, bits) - 1
	let twos = ((-dec) ^ mask) + 1
	return twos.toString(2)
}
