const bcrypt = require('bcryptjs');
const db = require('../models');

exports.signup = async (req, res) => {
  try {
    // const { username, email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const user = await db.User.create({ username, email, password: hashedPassword });
    // req.session.userId = user.id;
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.status(201).redirect('/dashboard');
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    req.session.userId = user.id;
    res.status(200).redirect('/dashboard');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.redirect('/');
  });
};

