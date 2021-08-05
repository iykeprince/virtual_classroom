const express = require('express');
const http = require('http');
const socketIO = require("socket.io")

const PORT = process.env.PORT || 3100;

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });


server.listen(PORT, () => { 
    console.log(`server started on port @${PORT}`); 
})

io.on('connection', (socket) => {
    console.log('new user connected ', socket.id);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
