const express = require("express");
const router = express.Router();
const gigController = require("./gigController");

router.get("/gigs", gigController, getAllGigs);
router.post("/gigs", gigController.createGig);

module.exports = router;