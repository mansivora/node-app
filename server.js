const express = require('express');
const bodyParser = require('body-parser');


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
//const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

var state = {
  db: null,
}

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect("mongodb://78.129.229.129:27743/accounts", function(err,db){
  if (err) throw err;
  console.log("Database Connected!");
  state.db = db;
  
});

exports.getCollection = function(accounts) {
  return state.db.collection(accounts);
};

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// ........

// Require Notes routes
require('./app/routes/retrivemail.routes.js')(app);
require('./app/routes/createproject.routes.js')(app);
require('./app/routes/user.routes.js')(app);
// ........



// listen for requests
app.listen(3030, () => {
    //console.log("Server is listening on port 3000");
});

exports = module.exports = app;

