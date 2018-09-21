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

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(
    "'mongodb://mansi:" +
      process.env.MONGO_ATLAS_PW +
      "@node-api-shard-00-00-fnn4y.mongodb.net:27017,node-api-shard-00-01-fnn4y.mongodb.net:27017,node-api-shard-00-02-fnn4y.mongodb.net:27017/test?ssl=true&replicaSet=node-api-shard-0&authSource=admin&retryWrites=true",
    {
        useNewUrlParser:true
    }
  );

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// ........

// Require Notes routes
require('./app/routes/createproject.routes.js')(app);
require('./app/routes/user.routes.js')(app);
// ........



// listen for requests
app.listen(3000, () => {
    //console.log("Server is listening on port 3000");
});

