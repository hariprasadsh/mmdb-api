const express = require("express");

const router = express.Router();

const genreController = require("../controllers/genere.controller");

// retrieve all genre
router.get("/", genreController.findAll);

// create genre
router.post("/", genreController.create);

// retrieve a genre by id
router.get("/:id", genreController.findById);

// update a genre by id
router.put("/:id", genreController.update);

// delete a genre by id
router.delete("/:id", genreController.delete);

module.exports = router;
