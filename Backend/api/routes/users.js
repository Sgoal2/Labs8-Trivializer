const server = require("express")(); // sets up an express instance and returns a callback function
const db = require("../../data/db");
const utilities = require("../util/utilities");

var simplecrypt = require("simplecrypt");

var sc = simplecrypt({ password: process.env.SECRET });

// Base endpoint (at users/)
server.get("/", (req, res) => {
  //   console.log(process.env);
  res.json("App is currently functioning");
});

// Add new user
server.post("/register", (req, res) => {
  console.log("req.body: ", req.body);
  const { username, password, name, email, phone, logo } = req.body; // This table also includes credit card info, will handle in billing

  if (!username || !password || !email) {
    res.status(400).json({
      error: "Please include a valid User Name, password and email address"
    });
  }

  const hash = sc.encrypt(password);
  const credentials = {
    username: username,
    password: hash,
    email: email,
    name: name,
    phone: phone,
    logo: logo
  };

  db("Users") // Hit Database table 'Users'
    .insert(credentials) // Credentials should include at least username, password and email. No duplicate usernames allowed
    .then(response => {
      let token = utilities.generateToken(username);
      res.status(201).json(token);
    })

    .catch(err => {
      console.log("err.message: ", err.message);
      res.status(500).json({ error: err.message });
    });
});

server.post("/login", utilities.getUser, (req, res) => {
  let { username, password } = req.body;
  console.log("username: ", username);

  db("Users")
    .where({ username })
    .first()
    .then(user => {
      if (user) {
        decryptedPassword = sc.decrypt(user.password);
        console.log("decryptedPassword: ", decryptedPassword);
        if (decryptedPassword === password) {
          // generate JWT and return it
          let token = utilities.generateToken(username);
          res.status(201).json(token);
        } else {
          res.status(401).json({ error: "Incorrect Credentials" });
        }
      }
    })
    .catch(err => res.status(401).json({ error: err.message }));
});

server.post("/save", utilities.protected, async (req, res) => {
  // Transactions allow us to perform multiple database calls, and if one of them doesn't work,
  // roll back all other calls. Maintains data consistency
  const { username, gamename, dateCreated, datePlayed } = req.body;

  try {
    // Get user
    await db.transaction(async trx => {
      let userId = await trx("Users")
        .where({ username })
        .first()
        .select("id"); // Get our user id based on username
      if (userId) userId = userId.id;
      else {
        throw new Error("username not found");
      }
      //Enter game info in DB with userID
      const gameInfo = {
        name: gamename,
        date_created: dateCreated,
        date_played: datePlayed,
        user_id: userId
      };

      let gameId = await trx("Games").insert(gameInfo);

      console.log("gameID: ", gameId);
      res.status(200).json({ gameID: gameId });
    });
  } catch (err) {
    console.log("err.message: ", err.message);
    res.status(501).json({ error: err.message });
  }
});

// ID for the game
// Game title
// how many games the user has ********
// games array
// game ID
// Description
// images
// created at
// played last

// users -> games -> rounds -> questions -> answers

/*****  Still needed *****/

// Authenticate ??

// Get all games for a user (db-recipe-book)

// Save a game to a user (db-recipe-book)

module.exports = server;

// What I need sent in to save
// username
// Game name
//
