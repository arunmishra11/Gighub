const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('logout', authController.logout);



router.get("/gigs", gigController, getAllGigs);
router.post("/gigs", gigController.createGig);

module.exports = router;