const { request, response } = require("express");
const express = require("express");
const router = express.Router();

// @route GET api/users
router.get("/", (request, response) => response.send("User Route"));

module.exports = router;