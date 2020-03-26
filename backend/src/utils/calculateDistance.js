/**
 * Convert degree to radius.
 *
 * @param {Number} deg Degree to be converted
 *
 * @returns Radius of that degree
 */
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * Get the distance between 2 coordinates in kilometers.
 *
 * @param {Object} centerCoordinates Actual distance
 * @param {Object} pointCoordinates Destination
 *
 * @returns Distance between the actual distance and destination
 */
module.exports = function getDistanceFromLatLonInKm(centerCoordinates, pointCoordinates) {
  const radius = 6371;

  const { latitude: lat1, longitude: lon1 } = centerCoordinates;
  const { latitude: lat2, longitude: lon2 } = pointCoordinates;

  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = radius * center;

  return distance;
};
