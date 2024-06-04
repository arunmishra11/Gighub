const express = require("express");
const { Gig, User } = require("../models");
const router = express.Router();
const auth = require("../utils/auth")
// router.get('/', auth, (req, res) => res.render('index')); // Setting the home page

router.get("/", async (req, res) => {
  try {
    const gigData = await Gig.findAll();
    const gigs = gigData.map((gig) => gig.get({ plain: true }));
    //const logged_in = true;

    res.render("index", {
      gigs,
      publicPath: "/public", // path to public****
      logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
}); // Setting the home page for carousel

// Render full list of gigs on gigRepo
router.get("/gigRepo", auth,  async (req, res) => {
  console.log("Session: ", req.session);
  console.log("Logged In: ", req.session.logged_in);
  try {
    // Get all projects and JOIN with user data
    const gigData = await Gig.findAll();
    // Serialize data so the template can read it
    const gigs = gigData.map((gig) => gig.get({ plain: true }));
   // console.log(req.session);

    console.log(gigs);
    // Pass serialized data and session flag into template
    res.render("gigRepo", {
      gigs,
    });
  } catch (err) {
    res.status(500).json(err);
  } // Setting the home page
});

// Search db for gig and render to gigPost
router.get("/gig/:id", async (req, res) => {
  try {
    const gigsData = await Gig.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const gig = gigsData.get({ plain: true });

    res.render("gigDisplay", {
      ...gig,
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render gigPost page for creating a new gig
router.get("/gigPost", auth, (req, res) => {
  console.log('SEssion: ', req.session);
  console.log("Hit gigPost route")
  let logged_in = false
  if(req.session.logged_in) {
    logged_in = true
  }
  res.render("gigPost", { logged_in: logged_in })
});

// Render gigPost page for creating a new gig
/*router.get("/test", auth, (req, res) => {
  console.log('SEssion: ', req.session);
  console.log("Hit gigPost route")
  res.render("gigPost")
});
*/

// Render individual gig
router.get("/gigDisplay", (req, res) => res.render("gigDisplay"));

// Render login/signup page
router.get("/loginSignup", (req, res) => res.render("loginSignup"));

module.exports = router;
