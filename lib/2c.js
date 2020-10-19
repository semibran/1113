const pad = require("./pad").left

module.exports = function twos(bits, dec) {
	let max = Math.pow(2, bits - 1) - 1
	if (dec < -max - 1) return null
	if (dec > max) return null
	if (dec == 0) return pad(bits)
	if (dec > 0) return pad(bits, Number(dec).toString(2))
	let mask = Math.pow(2, bits) - 1
	let twos = ((-dec) ^ mask) + 1
	return pad(bits, twos.toString(2))
}
