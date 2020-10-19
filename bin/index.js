const funcs = {
	"any-to-dec": require("../lib/any-to-dec"),
	"dec-to-any": require("../lib/float-from-dec"),
	"any-to-any": require("../lib/float-from-any"),
	"2c-to-dec": require("../lib/2c-to-dec"),
	"bias-to-dec": require("../lib/bias-to-dec"),
	"signmag": require("../lib/signmag-from-dec"),
	"1c": require("../lib/1c-from-dec"),
	"2c": require("../lib/2c-from-dec"),
	"xs": require("../lib/xc-from-dec"),
	"bias": require("../lib/bias-from-dec"),
	"add2c": require("../lib/2c-add"),
	"bcit": require("../lib/bcit-from-dec"),
}

let input = process.argv.slice(2)
let funcid = input[0]
let convert = funcs[funcid]
if (!convert) {
	console.log("no function found for " + funcid)
	process.exit()
}

let args = input.slice(1)
let output = convert(...args)
console.log(output)
