const { request, response } = require("express");
const express = require("express");
const router = express.Router();

// @route GET api/posts
router.get("/", (request, response) => response.send("Posts Route"));

module.exports = router;