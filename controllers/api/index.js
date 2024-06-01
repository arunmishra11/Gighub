const router = require("express").Router();

const userRoutes = require("./userRoutes");
const gigRoutes = require("./gigRoutes");

// =---> /api/users
router.use("/users", userRoutes);
router.use("/gigpost", gigRoutes);

module.exports = router;
