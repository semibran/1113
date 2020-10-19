const todec = require("../lib/todec")
const funcs = { todec }

let input = process.argv.slice(2)
let convert = funcs[input[0]]
let output = convert(...input.slice(1))
console.log(input, "->", output)
