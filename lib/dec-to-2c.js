const pad = require("./bin-pad")

module.exports = function decto2c(bits, dec) {
	if (dec == 0) return pad(bits)
	if (dec > 0) return dec.toString(2)
	return pad(bits, ((-dec) ^ (Math.pow(2, bits) - 2)).toString(2))
}
