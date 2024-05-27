const router = require("express").Router(); //Import the 'router' object from 'express' library
const path = require("path"); // Import the 'path' module to handle and transform file paths

router.get("/", async (req, res) => {
    try { res.render('index') 
    } catch (err){
      res.status(500).json(err);
    }
});

router.get("/login/gigs:id", async (req, res) =>)
