const express = require("express");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const { getInbox } = require("../controller/inboxController");

const router = express.Router();

//login page
router.get("/",decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
