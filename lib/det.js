module.exports = { det2x2, det3x3 }

function det2x2 (a, b, c, d) {
  return a * d - b * c
}

function det3x3 (a, b, c, d, e, f, g, h, i) {
  return a * e * i + b * f * g + c * d * h
    - c * e * g - b * d * i - a * f * h
}
