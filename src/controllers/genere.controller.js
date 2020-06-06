const Genre = require("../models/genre.model.js");

// find all genre
exports.findAll = (req, res) => {
  Genre.find()
    .then((genre) => {
      res.send(genre);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Something went wrong!",
      });
    });
};

// create a new genre
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field",
    });
  }

  // create a new genre object
  const genre = new Genre({
    name: req.body.name,
    tag: req.body.tag,
    desc: req.body.desc,
  });

  // save to db
  genre
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Something went wrong creating genre",
      });
    });
};

// find a genre by id
exports.findById = (req, res) => {};

// update genre by id
exports.update = (req, res) => {};

// delete a genre by id
exports.delete = (req, res) => {};
