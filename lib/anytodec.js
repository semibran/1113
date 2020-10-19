module.exports = function anytodec(base, str) {
	let dot = str.lastIndexOf(".")
	if (dot < 0) return parseInt(str, base)
	let int = parseInt(str.slice(0, dot), base)
	let frac = 0
	for (let i = dot + 1; i < str.length; i++) {
		let char = str[i]
		let value = Math.pow(base, dot - i)
		frac += Number(char) * value
	}
	return int + frac
}
