module.exports = function todec(base, str) {
  let dot = str.lastIndexOf(".")
  if (dot < 0) return parseInt(str, base)
  let int = parseInt(str.slice(0, dot), base)
  let frac = 0
  for (let i = dot + 1; i < str.length; i++) {
    let value = Math.pow(base, dot - i)
    if (Number(str[i])) {
      frac += value
    }
  }
  return int + frac
}
