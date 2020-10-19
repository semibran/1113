const fractobin = require("./fractobin")

let dec = process.argv[2]
if (!dec) {
	console.log("Provide a decimal fraction as an argument.")
} else {
	let bin = fractobin(eval(dec))
	console.log(bin)
}
