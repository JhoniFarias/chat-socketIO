const express = require('express')
const routes = require('./src/router')
const db = require('./src/db/Connection')

const app = express()

app.use(routes)

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

        db.run(`INSERT INTO messages (user_id, message_description) VALUES(?, ?);`, [message.User, message.Text], (err) => {
            if (err) {
                return
            }
        });

        io.emit("MESSAGE", message);
    });
});

// Servidor rodando na porta 8082
http.listen(8082, () => {
    console.log("Serving on localhost:8082");
})