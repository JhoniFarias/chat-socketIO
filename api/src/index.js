const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});


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

http.listen(8081, () => {
    console.log("Listen port 8081");
});

