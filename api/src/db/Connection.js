const sqlite3 = require('sqlite3')
const path = require('path')

const db = new sqlite3.Database('./src/db/storage.db', (err) => {
    if(!err){
        return console.log('Database connection OK')
    }

    console.log('Error stabilizing database connection - ' + err)
})


db.run('CREATE TABLE users(user_id INTEGER PRIMARY KEY, user TEXT UNIQUE, passwd TEXT);', (err) => {
    if(!err) {
        return console.log('Created table users')
    }

    console.log('Error creating tables users - ' + err)
})

db.run('CREATE TABLE users_blocked(user_blocked_id INTEGER PRIMARY KEY, user_id INTEGER, user_id_blocked INTEGER);', (err) => {
    if(!err) {
        return console.log('Created table users blocked')
    }

    console.log('Error creating tables users - ' + err)
})

db.run('CREATE TABLE messages(messages_id INTEGER PRIMARY KEY, user_id INTEGER, message_description TEXT);', (err) => {
    if(!err) {
        return console.log('Created table messages')
    }

    console.log('Error creating tables users - ' + err)
})

module.exports = db
