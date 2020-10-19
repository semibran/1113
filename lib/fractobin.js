module.exports = function fractobin(dec) {
	let bin = ""
	let fracstart = getfrac(dec)
	let frac
	do {
		dec *= 2
		frac = getfrac(dec)
		bin += Math.trunc(dec)
		dec = frac
	} while (frac !== 0 && !approxeq(frac, fracstart))

	let repeat = !!frac
	return { value: bin, repeat }

	function getfrac(dec) {
		return dec - Math.trunc(dec)
	}

	function approxeq(a, b) {
		const mod = 10000000000
		return Math.round(a * mod) === Math.round(b * mod)
	}
}
