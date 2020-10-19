const funcs = {
	"dec": require("../lib/dec"),
	"float": require("../lib/float"),
	"signmag": require("../lib/signmag"),
	"1c": require("../lib/1c"),
	"2c": require("../lib/2c"),
	"2c-add": require("../lib/2c-add"),
	"2c-dec": require("../lib/2c-dec"),
	"xs": require("../lib/xs"),
	"bias": require("../lib/bias"),
	"bias-dec": require("../lib/bias-dec"),
	"bcit": require("../lib/bcit"),
	"bcit-dec": require("../lib/bcit-dec"),
	"bcit-std": require("../lib/bcit-std"),
	"bcit-add": require("../lib/bcit-add"),
	"bcit-add-dec": require("../lib/bcit-add-dec"),
	"bcit-add-v": require("../lib/bcit-add-v"),
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
