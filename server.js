const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

// allow all cross origin requests
app.use(cors());

// server port
const port = process.env.port || 4000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require("./config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database.", err);
    process.exit();
  });

// define a root/default route
app.get("/", (req, res) => {
  res.json({ message: "MMDB API" });
});

// require genre routes
const genreRoutes = require("./src/routes/genre.routes");

// using as middleware
app.use("/api/genre", genreRoutes);

// listen for requests
app.listen(port, () => {
  console.log("MMDB API server is listening on port " + port);
});
