function isNumber(item) {
  return /[0-9]+/.test(item);
}

module.exports = isNumber;