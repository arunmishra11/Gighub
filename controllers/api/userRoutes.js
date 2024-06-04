const router = require('express').Router();
const { User } = require('../../models');

// --- > /api/users/ 
// Creating a session
router.post('/', async (req, res) => {
 try {
   const userData = await User.create(req.body);


   req.session.save(() => {
     req.session.user_id = userData.id;
     req.session.logged_in = true;


     res.status(200).json(userData);
   });
 } catch (err) {
   res.status(400).json(err);
 }
});

// Path for login for users
// -- > /api/users/login
router.post('/login', async (req, res) => {
 try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    console.log("User Data: ", userData)

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
 
 
    const validPassword = await userData.checkPassword(req.body.password);
 
    console.log('Is valid: ', validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
 
 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log("Session Created: ", req.session);
      res.json({ user: userData, message: 'You are now logged in!' });
    });
 
 
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
 });
 
 // --> api/users/logout
 router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      console.log("User logged out")
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
 });
 
 
 module.exports = router;
 