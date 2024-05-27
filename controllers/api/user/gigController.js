const db = require("../../../models");

exports.getAllGigs = async (req, res) => {
  try {
    const gigs = await db.Gig.findAll({ include: db.User });
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createGig = async (req, res) => {
  try {
    const { title, description } = req.body;
    const gig = await db.Gig.create({
      title,
      description,
      userId: req.session.userId,
    });
    res.status(201).json(gig);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
