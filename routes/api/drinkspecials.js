const router = require("express").Router();
const drinkController = require("../../controllers/drinkController");

// Matches with "/api/drinkspecials"
router.route("/")
  .get(drinkController.findAll);
  // .post(booksController.create);

// Matches with "/api/drinkspecials/:id"
router
  .route("/:id")
  .get(drinkController.findById)
  .put(drinkController.update)
  .delete(drinkController.remove);

module.exports = router;
