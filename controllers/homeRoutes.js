
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index')); // Setting the home page


module.exports = router;