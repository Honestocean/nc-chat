const io = require('socket.io')();

io.on('connection', client => {
  client.on('receiveMessage', message => {
    client.emit('submitMessage', message);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
