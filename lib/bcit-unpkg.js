module.exports = function unpkg(str) {
	return {
		sign: str[0],
		exponent: str.slice(1, 5),
		mantissa: str.slice(5, 10)
	}
}
