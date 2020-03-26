const socketio = require('socket.io');

const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

const connections = [];
let io;

/**
 * Start a socket connection and add every connection to an array.
 *
 * @param {Object} server Socket server
 */
exports.setupSocket = (server) => {
  io = socketio(server);

  io.on('connection', (socket) => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude)
      },
      techs: parseStringAsArray(techs)
    });
  });
};

/**
 * Searches for devs in a 10km radius from a coordinate.
 *
 * @param {Object} coordinates Coordinates to search
 * @param {Array} techs Techs to search
 *
 * @returns Array of connections filtered
 */
exports.findConnections = (coordinates, techs) => {
  return connections.filter(
    (connection) =>
      calculateDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some((item) => techs.includes(item))
  );
};

/**
 * Emit a signal.
 *
 * @param {Array} to Array of connections to send the message
 * @param {String} message Signal to be emitted
 * @param {Object} data Data to be sent
 */
exports.sendMessage = (to, message, data) => {
  to.forEach((connection) => {
    io.to(connection.id).emit(message, data);
  });
};
