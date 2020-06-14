const express = require("express");

const router = express.Router();

const languageController = require("../controllers/language.controller");

// retrieve all language
router.get("/", languageController.findAll);

// create language
router.post("/", languageController.create);

// retrieve a language by id
router.get("/:id", languageController.findById);

// update a language by id
router.put("/:id", languageController.update);

// delete a language by id
router.delete("/:id", languageController.delete);

module.exports = router;
