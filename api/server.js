const express = require('express')
const routes = require('./src/router')

const app = express()

app.use(routes)

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log("User Connected");
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on("SENDMESSAGE", (message) => {
        io.emit("MESSAGE", message);
        console.log(message);
    });
});

// Servidor rodando na porta 8082
http.listen(8082, () => {
    console.log("Serving on localhost:8082");
})