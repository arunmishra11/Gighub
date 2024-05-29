
const express = require('express');
const { Gig, User } = require('../models');
const router = express.Router();

router.get('/', (req, res) => res.render('index')); // Setting the home page

// Render full list of gigs on gigRepo
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

// Search db for gig and render to gigPost
router.get('/gig/:id', async (req, res) => {
    try {
      const gigsData = await Gig.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const gig = gigsData.get({ plain: true });
  
      res.render('gigDisplay', {
        ...gig,
        // logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


// Render gigPost page for creating a new gig
router.get('/gigPost', (req, res) => res.render('gigPost'));


// Render individual gig
router.get('/gigDisplay', (req, res) => res.render('gigDisplay'));


module.exports = router;