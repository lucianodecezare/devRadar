// TODO: Document this
const parseStringAsArray = (arrayAsString) => {
  return arrayAsString.split(',').map((string) => string.trim());
};

module.exports = parseStringAsArray;
