var path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var countUserPresence = 0;

app.use('/static', express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

io.on("connection", (socket) => {
  console.log("A user connected");
  countUserPresence += 1;
  socket.on('disconnect', () => {
    console.log('user disconnected');
    countUserPresence -= 1;

    if (countUserPresence == 0) {
      console.log('Zero users present');
    }
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
