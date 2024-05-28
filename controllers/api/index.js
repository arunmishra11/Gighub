const router = require('express').Router();

const userRoutes = require('./userRoutes');


// =---> /api/users
router.use('/users', userRoutes);
router.use('/gigpost', gigRoutes);



module.exports = router;