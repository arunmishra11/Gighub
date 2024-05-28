
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index')); // Setting the home page
router.get('/gigDisplay', (req, res) => res.render('gigDisplay')); // Setting the home page
router.get('/gigPost', (req, res) => res.render('gigPost'));
router.get('/gigRepo', (req,res) => res.render('gigRepo'));


module.exports = router;