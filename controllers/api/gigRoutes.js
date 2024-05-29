const router = require('express').Router();
const { User, Gig } = require('../../models');

// Authentification and rendering gigRepo
router.post('/gigRepo', async (req, res) => {
  try {
    const gigs = await Gig.findAll({ include: User });
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a post on gigPost
router.post('/gigPost', async (req, res) => {
  try {
    
    const gig = await Gig.findByPk({
      title,
      description,
      userId: req.session.userId,
    });
    res.status(201).json(gig);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.get('/gigPost', (req, res) => res.render('gigPost'));



module.exports = router;