const express = require("express");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { getUsers } = require("../controller/usersController");

const router = express.Router();

//login page
router.get("/",decorateHtmlResponse("User") ,getUsers);

module.exports = router;
