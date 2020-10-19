module.exports = function bcitstr(float) {
	return float.sign + float.exponent + float.mantissa
}
