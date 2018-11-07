const server = require('express')()         // sets up an express instance and returns a callback function
const db = require('../../data/db')
// const helpers = require('../helpers/helpers')
var simplecrypt = require("simplecrypt");
const jwt = require('jsonwebtoken');

var sc = simplecrypt();

var digest = sc.encrypt(process.env.SECRET);
console.log(digest);

server.get('/', (req, res) => {
    console.log(process.env)
    res.json("App is currently functioning")
})

server.post('/login', (req, res) => {

    let { username, password } = req.body

    try{
        db('Users')
            .where({ username })
            .first()
            .then(user => {
                if(user){
                    decryptedPassword = sc.decrypt(user.password);
                    if(decryptedPassword === password){

                    }
                }
            })
    }
})

server.get('/:userId')


module.exports = server


