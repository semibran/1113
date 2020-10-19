exports.left = padleft
exports.right = padright

function padleft(bits, bin) {
	if (!bin) bin = ""
	while (bin.length < bits) bin = "0" + bin
	return bin
}

function padright(bits, bin) {
	if (!bin) bin = ""
	while (bin.length < bits) bin += "0"
	return bin
}
