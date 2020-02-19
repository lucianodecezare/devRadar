/**
 * Parse a string as an array.
 *
 * Example: 'React, Node, React-Native' becomes ['React', 'Node', 'React-Native']
 */
const parseStringAsArray = (arrayAsString) => {
  return arrayAsString.split(',').map((string) => string.trim());
};

module.exports = parseStringAsArray;
