import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.107:3333', {
  autoConnect: false
});

/**
 * Live search for devs. Whenever a new dev is registered, a marker will appear.
 *
 * @param {Function} subscribeFunction Function to be executed
 */
function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

/**
 * Connect to socket server and send the location and techs to search for devs.
 *
 * @param {Number} latitude Latitude to search
 * @param {Number} longitude Longitude to search
 * @param {Array} techs Techs to search
 */
function connect(latitude, longitude, techs) {
  socket.io.opts.query = { latitude, longitude, techs };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
