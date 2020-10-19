module.exports = function pad(bits, bin) {
	if (!bin) bin = ""
	while (bin.length < bits) bin = "0" + bin
	return bin
}
