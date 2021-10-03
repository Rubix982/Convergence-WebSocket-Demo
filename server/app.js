var path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use('/static', express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
