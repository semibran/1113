const funcs = {
	"any-to-dec": require("../lib/any-to-dec"),
	"dec-to-any": require("../lib/dec-to-any"),
	"any-to-any": require("../lib/any-to-any"),
	"signmag": require("../lib/bin-signmag"),
	"1c": require("../lib/bin-1c"),
	"2c": require("../lib/bin-2c"),
	"xs": require("../lib/bin-xs"),
}

let input = process.argv.slice(2)
let convert = funcs[input[0]]
let args = input.slice(1)
let output = convert(...args)
console.log(output)
