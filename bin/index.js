const funcs = {
	anytodec: require("../lib/any-to-dec"),
	dectoany: require("../lib/dec-to-any"),
	anytoany: require("../lib/any-to-any"),
	sm: require("../lib/sm")
}

let input = process.argv.slice(2)
let convert = funcs[input[0]]
let args = input.slice(1)
let output = convert(...args)
console.log(input, "->", output)
