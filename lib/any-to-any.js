const anytodec = require("./any-to-dec")
const dectoany = require("./dec-to-any")

// dectoany(frombase, tobase, val) -> float
// > converts a string number `val` of radix `frombase`
// > to a float of radix `tobase`, where float is an object:
// >  float : {
// >  	base : int
// >  	int : str
// >  	frac : str
// >  	repeat : bool
// >  }
module.exports = function anytoany(frombase, tobase, val) {
	return dectoany(tobase, anytodec(frombase, val))
}
