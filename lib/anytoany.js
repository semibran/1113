const anytodec = require("./anytodec")
const dectoany = require("./dectoany")

module.exports = function anytoany(frombase, tobase, val) {
	return dectoany(tobase, anytodec(frombase, val))
}
