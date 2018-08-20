const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const session = require('express-session');
const env = require('dotenv').load();
const passport = require('passport');
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use(routes);

const models = require("./models");

// Routes
var authRoute = require('./routes/auth.js')(app, passport);

//Sync Database
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine')
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
