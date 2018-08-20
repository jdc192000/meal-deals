const router = require("express").Router();
const foodController = require("../../controllers/foodController");

// Matches with "/api/foodspecials"
router.route("/")
  .get(foodController.findAll);
  // .post(booksController.create);

// Matches with "/api/foodspecials/:id"
router
  .route("/:id")
  .get(foodController.findById)
  .put(foodController.update)
  .delete(foodController.remove);

module.exports = router;
