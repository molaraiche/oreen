const router = require("express").Router();
const {
  showBooks,
  demandBook,
  updateBookingStatus,
  deletedBookings,
} = require("../controllers/bookController");

router.get("/", showBooks);
router.post("/demandBook", demandBook);
router.put("/:id", updateBookingStatus);
router.delete("/:id", deletedBookings);

module.exports = router;
