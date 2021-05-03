// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
require('dotenv/config')

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.use(express.static('public')) // set the static files location

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

/**
 * Database
 */

mongoose.connect()

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

