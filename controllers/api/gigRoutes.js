const router = require('express').Router();
const { User, Gig } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const gigs = await Gig.findAll({ include: User });
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

exports.createGig = async (req, res) => {
  try {
    const { title, description } = req.body;
    const gig = await Gig.create({
      title,
      description,
      userId: req.session.userId,
    });
    res.status(201).json(gig);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = router;