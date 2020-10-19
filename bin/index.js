const funcs = {
	"any-to-dec": require("../lib/any-to-dec"),
	"dec-to-any": require("../lib/dec-to-any"),
	"any-to-any": require("../lib/any-to-any"),
	"dec-to-2c": require("../lib/dec-to-2c"),
	"signmag": require("../lib/bin-signmag"),
	"1c": require("../lib/bin-1c"),
	"2c": require("../lib/bin-2c"),
	"xs": require("../lib/bin-xs"),
	"bias": require("../lib/bin-bias"),
	"add2c": require("../lib/bin-add2c"),
}

let input = process.argv.slice(2)
let funcid = input[0]
let convert = funcs[funcid]
if (!convert) {
	console.log("no function found for " + funcid)
	process.exit()
}

let args = input.slice(1)
let output = convert(...args.map(eval))
console.log(output)
