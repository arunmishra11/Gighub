const router = require("express").Router();
const { User, Gig } = require("../../models");

// Authentification and rendering gigRepo
router.post("/gigRepo", async (req, res) => {
  try {
    const gigs = await Gig.findAll({ include: User });
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a post on gigPost
router.post("/gigPost", async (req, res) => {
  try {
    const gig = await Gig.create({
      // title: req.body.title,
      company: req.body.company,
      technologies: req.body.technologies,
      budget: req.body.budget,
      contact_email: req.body.contact_email,
      description: req.body.description,
      // user_id: req.session.user_id,
      user_id: 1,
    });
    res.status(200).json(gig);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// router.get('/gigPost', (req, res) => res.render('gigPost'));

module.exports = router;
