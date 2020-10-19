// dectoany(base, dec) -> float
// > converts a decimal number `dec` to a `float`
// > of radix `base` where `float` is an object:
// > float : {
// >	base : int
// >	int : str
// >	frac : str
// >	repeat : bool
// > }
module.exports = function dectoany(base, dec) {
	let int = Math.trunc(dec).toString(base).toUpperCase()
	if (Math.trunc(dec) == dec) return { base, int }
	let iters = 0
	let fracstr = ""
	let fracstart = getfrac(dec)
	let frac = fracstart
	do {
		dec = frac * base
		if (dec < 1) {
			fracstr += 0
			frac = dec
		} else {
			fracstr += Math.trunc(dec).toString(base).toUpperCase()
			frac = getfrac(dec)
			dec = frac
		}
	} while (frac !== 0 && !approxeq(frac, fracstart) && ++iters < 120)
	let repeat = !!frac
	return { base, int, frac: fracstr, repeat }
}

function getfrac(dec) {
	let str = dec.toString()
	let dot = str.indexOf(".")
	if (dot === -1) return 0
	let places = 1000 // str.slice(dot)
	return (dec * places - Math.trunc(dec) * places) / places
}

function approxeq(a, b) {
	if (a === b) return true
	const mod = 10000000000
	return Math.round(a * mod) === Math.round(b * mod)
}
