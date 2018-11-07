const server = require('express')()         // sets up an express instance and returns a callback function
const db = require('../../data/db')
const utilities = require('../util/utilities');
var simplecrypt = require("simplecrypt");

var sc = simplecrypt({ password: process.env.SECRET });

//***** An example of using encrypt/decrypt with simplecrypt *****/ 

// var digest = sc.encrypt('hello');
// console.log(digest, "\n");

// var decrypted = sc.decrypt(digest);
// console.log("decrypted: ", decrypted, "\n");


// Base endpoint (at users/)
server.get('/', (req, res) => {
    console.log(process.env)
    res.json("App is currently functioning")
})


// Add new user 
server.post('/register', (req, res) => {

    const { username, password, name, email, phone, logo } = req.body    // This table also includes credit card info, will handle in billing
    
    if(!username || !password || !email){
        res.status(400).json({error: "Please include a valid User Name, password and email address"})
    }


    const hash = sc.encrypt(password);
    const credentials = { username: username, password: hash, email : email, name : name, phone: phone, logo: logo};

    db('Users')                     // Hit Database table 'Users'
        .insert(credentials)        // Credentials should include at least username, password and email. No duplicate usernames allowed
        .then(res => {
            console.log("RESPONSE!!!: ", res);
            res.status(200).json(res[0]);
        })
.catch(err => {
            res.status(500).json({"error": err.message})
        })
})


server.post('/login', utilities.getUser, (req, res) => {

    let { username, password } = req.body
    console.log("username: ", username);

    db('Users')
        .where({ username })
        .first()
        .then(user => {
            if(user){
                decryptedPassword = sc.decrypt(user.password);
                console.log("decryptedPassword: ", decryptedPassword);
                if(decryptedPassword === password){
                    // generate JWT and return it
                    let token = utilities.generateToken(username);
                    res.status(201).json(token);
                }
                else{
                    res.status(401).json({"error": "Incorrect Credentials"});
                }
            }
        }).catch(err => res.status(401).json({"error": err.message}))
})


/*****  Still needed *****/

// Authenticate ??

// Get all games for a user (db-recipe-book)

// Save a game to a user (db-recipe-book)

module.exports = server


