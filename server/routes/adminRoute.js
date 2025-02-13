const router = require("express").Router();
const { login } = require("../controllers/adminController");
// router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
