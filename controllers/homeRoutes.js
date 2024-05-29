
const express = require('express');
const { Gig, User } = require('../models');
const router = express.Router();

router.get('/', (req, res) => res.render('index')); // Setting the home page


router.get('/gigRepo', async (req, res) => { 
    try {
        // Get all projects and JOIN with user data
        const gigData = await Gig.findAll();
        console.log('hello')
        // Serialize data so the template can read it
        const gigs = gigData.map((gig) => gig.get({ plain: true }));
        console.log(req.session);

        console.log(gigs)
        // Pass serialized data and session flag into template
        res.render('gigRepo', { 
          gigs 
        });
      } catch (err) {
        res.status(500).json(err)}; // Setting the home page
})
router.get('/gigPost', (req, res) => res.render('gigPost'));
// router.get('/gigRepo', (req,res) => res.render('gigRepo'));


module.exports = router;