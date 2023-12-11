const express = require("express");
const { addToLikedMovies } = require("../controllers/UserControllers");
const router = express.Router();

router.post("/add", addToLikedMovies);

module.exports = router;
