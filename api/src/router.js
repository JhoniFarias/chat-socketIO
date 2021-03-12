const express = require('express')
const router = express.Router()

const db = require('./db/Connection')

// Rotas para manipular usuarios
router.get('/users', (req, res) => {
    let param = req.body

    if(!param){
        return res.send({'status': 400, 'msg': 'Nenhum dado informado.'})
    }

    db.get(`SELECT * FROM users WHERE user = ? AND passwd = ?;`, [param.user, param.passwd], (err, row) => {
        if(err){
            return res.send({'status': 500, 'msg': 'Erro ao buscar usuario - ' + err.message})
        }
        
        if(row){
            return res.send({'status': 200, 'result': row})
        }

        return res.send({'status': 404, 'msg': 'Nenhum usuario encontrado..'})
    })
})

router.post('/users', (req, res) => {
    let param = req.body

    if(!param){
        return res.send({'status': 400, 'msg': 'Nenhum dado informado.'})
    }

    db.get(`SELECT * FROM users WHERE user = ? AND passwd = ?;`, [param.user, param.passwd], (err, row) => {
        if(err){
            return res.send({'status': 500, 'msg': 'Erro ao buscar usuario - ' + err.message})
        }
        
        if(row){
            return res.send({'status': 400, 'msg': 'Usuário já existente na base de dados!'})
        }
    })

    db.run(`INSERT INTO users(id, user, passwd) VALUES(NULL, ?, ?)`, [param.user, param.passwd], (err) => {
        if(err){
            return res.send({'status': 500, 'msg': 'Erro ao cadastrar usuário - ' + err.message})
        }

        res.send({'status': 200, 'msg': 'Usuário cadastrado com sucesso!'})
    })
})

module.exports = router
