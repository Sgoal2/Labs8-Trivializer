const server = require('express')()         // sets up an express instance and returns a callback function
// const db = require('../../data/db')
// const helpers = require('../helpers/helpers')
var simplecrypt = require("simplecrypt");

var sc = simplecrypt();

var digest = sc.encrypt(process.env.SECRET);
console.log(digest);

server.get('/', (req, res) => {
    console.log(process.env)
    res.json("App is currently functioning")
})

server.post('/register', (req, res) => {
    
})


module.exports = server