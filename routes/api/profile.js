const { request, response } = require("express");
const express = require("express");
const router = express.Router();

// @route GET api/profile
router.get("/", (request, response) => response.send("Profile Route"));

module.exports = router;