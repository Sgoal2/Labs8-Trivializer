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

// Testing endpoints
// Get all users table
server.get("/users", (req, res) => {
  db("Users")
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all games table
server.get("/games", (req, res) => {
  db("Games")
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all Rounds table
server.get("/rounds", (req, res) => {
  db("Rounds")
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all Questions table
server.get("/questions", (req, res) => {
  db("Questions")
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
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
  const {
    username,
    description,
    gamename,
    dateCreated,
    datePlayed,
    rounds
  } = req.body;

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
        user_id: userId,
        description: description
      };

      let gameId = (await trx("Games").insert(gameInfo))[0];

      // Enter Rounds in Database
      const numberOfRounds = rounds.length; // First get number of rounds

      // Then assemble what we're going to insert in rounds table
      const roundsPackage = rounds.map(round => {
        return {
          name: round.roundname,
          number_of_questions: round.round.length,
          game_id: gameId
        };
      });

      let roundsPromises = roundsPackage.map(async round => {
        // Insert all rounds into game
        return (await trx("Rounds").insert(round))[0];
      });

      let roundsIds;

      await Promise.all(roundsPromises).then(values => {
        console.log("Promises!!: ", values);
        roundsIds = values;
      });

      // Insert questions/answers into database
      let questions = [];

      rounds.forEach((namedRound, index) => {
        namedRound.round.forEach(round => {
          questions.push({
            rounds_id: roundsIds[index],
            category: round.category,
            difficulty: round.difficulty,
            type: round.type,
            question: round.question,
            correct_answer: round.correct_answer,
            incorrect_answers: round.incorrect_answers.join("--")
          });
        });
      });

      let indicator = await trx("Questions").insert(questions);

      const returnGame = {
        gameId: gameId,
        gamename: gamename,
        dateCreated: dateCreated,
        datePlayed: datePlayed,
        rounds: rounds
      };
      res.status(200).json(returnGame);
    });
  } catch (err) {
    console.log("err.message: ", err.message);
    res.status(501).json({ error: err.message });
  }
});

server.post(
  "/games",
  utilities.getUser,
  utilities.protected,
  async (req, res) => {
    try {
      const id = req.userIn.id;
      console.log("ID: ", id);
      let games = await db
        .select(
          "g.id as gameId",
          "g.name as gamename",
          "g.description as description",
          "g.date_created as dateCreated",
          "g.date_played as datePlayed"
        )
        .from("Users as u")
        .leftJoin("Games as g", "g.user_id", "u.id")
        .where("u.id", "=", id);

      console.log("Games: ", games);

      res.status(200).json(games);
    } catch (err) {
      console.log("err.message: ", err.message);
      res.status(500).json({ error: "Problem getting games" });
    }
  }
);

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
// round (array)
// each round has roundname, round (array with question objects)
// Each question object has category, type, difficulty, question, correct_answer, incorrect_answers (array)
