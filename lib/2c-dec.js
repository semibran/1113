module.exports = function twodec(bits, bin) {
	let dec = parseInt(bin, 2)
	if (dec < Math.pow(2, bits - 1)) return dec
	let mask = Math.pow(2, bits) - 1
	return -(dec ^ mask) - 1
}
