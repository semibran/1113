const funcs = {
	anytodec: require("../lib/anytodec"),
	dectoany: require("../lib/dectoany"),
	anytoany: require("../lib/anytoany"),
	fractobin: require("../lib/fractobin")
}

// number : {
// 	base : int
// 	int : str
// 	frac : str
// 	repeat : bool
// }

let input = process.argv.slice(2)
let convert = funcs[input[0]]
let args = input.slice(1)
let output = convert(...args)
console.log(input, "->", output)
