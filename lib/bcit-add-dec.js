const bcit = require("./bcit")
const bcitstr = require("./bcit-str")
const bcitadd = require("./bcit-add")
const bcitdec = require("./bcit-dec")

module.exports = function bcitadddec(a, b) {
	let str1 = bcitstr(bcit(a))
	let str2 = bcitstr(bcit(b))
	let sum = bcitadd(str1, str2)
	return bcitdec(bcitstr(sum))
}
