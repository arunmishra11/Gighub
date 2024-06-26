const router = require("express").Router();
const { User, Gig } = require("../../models");

// Authentification and rendering gigRepo
router.get("/gigRepo", async (req, res) => {
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
      company: req.body.company,
      title: req.body.title,
      technologies: req.body.technologies,
      budget: req.body.budget,
      contact_email: req.body.contact_email,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    // Send a success response with redirection URL
    res.status(200).json({ success: true, redirectUrl: "/gigRepo" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
