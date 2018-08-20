const router = require("express").Router();
const foodRoutes = require("./foodspecials");
const drinkRoutes = require("./drinkspecials");

// Food routes
router.use("/foodspecials", foodRoutes);
router.use("/drinkspecials", drinkRoutes);

module.exports = router;
