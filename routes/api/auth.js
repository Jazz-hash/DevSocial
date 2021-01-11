const { request, response } = require("express");
const express = require("express");
const router = express.Router();

// @route GET api/auth
router.get("/", (request, response) => response.send("Auth Route"));

module.exports = router;