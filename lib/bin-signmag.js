const pad = require("./bin-pad").left

// signmag(bits, dec) -> bin
// > attempts to convert a decimal number `dec`
// > to a bitstring `bin` in sign magnitude format
// > with number of bits `bits`
// > returns null if not enough bits
module.exports = function signmag(bits, dec) {
	let bin = Number(dec).toString(2)
	if (bin.length >= bits) return null
	bin = pad(bits - 1, bin)
	if (dec >= 0) {
		bin = "0" + bin
	} else {
		bin = "1" + bin
	}
	return bin
}
