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
exports.findById = (req, res) => {
  Genre.findById(req.params.id)
    .then((genre) => {
      if (!genre) {
        return res.status(404).send({
          message: "Genre not found with id: " + req.params.id,
        });
      }
      res.send(genre);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Genre not found with id: " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error getting genre with id: " + req.params.id,
      });
    });
};

// update genre by id
exports.update = (req, res) => {
  // validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field",
    });
  }

  Genre.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      tag: req.body.tag,
      desc: req.body.desc,
    },
    { new: true }
  )
    .then((genre) => {
      if (!genre) {
        return res.status(404).send({
          message: "Genre not found with id: " + req.params.id,
        });
      }
      res.send(genre);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.send(404).send({
          message: "Genre not found with id: " + req.params.id,
        });
      }
      return res.send(500).send({
        message: "Error getting genre with id: " + req.params.id,
      });
    });
};

// delete a genre by id
exports.delete = (req, res) => {
  Genre.findByIdAndRemove(req.params.id)
    .then((genre) => {
      if (!genre) {
        return res.status(404).send({
          message: "Genre not found with id: " + req.params.id,
        });
      }
      res.send({ message: "Genre deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.send(404).send({
          message: "Genre not found with id: " + req.params.id,
        });
      }
      return res.send(500).send({
        message: "Error getting genre with id: " + req.params.id,
      });
    });
};
