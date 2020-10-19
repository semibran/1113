const pad = require("./bin-pad").left

module.exports = function bias(ext, dec) {
	ext = Number(ext)
	dec = Number(dec)
	if (dec < -ext) return null
	if (dec > ext + 1) return null
	let bits = ext.toString(2).length
	return pad(bits, (dec + ext).toString(2))
}
