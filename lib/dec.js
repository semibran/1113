// anytodec(base, str) -> float
// > converts a string number to a float,
// > where a float is an object of type
// >  float : {
// >  	base : int
// >  	int : str
// >  	frac : str
// >  	repeat : bool
// >  }
module.exports = function anytodec(base, str) {
	let dot = str.lastIndexOf(".")
	if (dot < 0) return parseInt(str, base)
	let int = parseInt(str.slice(0, dot), base)
	let frac = 0
	for (let i = dot + 1; i < str.length; i++) {
		let char = str[i]
		let value = Math.pow(base, dot - i)
		frac += parseInt(char, 36) * value
	}
	return int + frac
}
