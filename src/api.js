import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function messageFunc(cb) {
  socket.on('submitMessage', message => cb(null, message));
  socket.emit('receiveMessage');
}

export { messageFunc };
