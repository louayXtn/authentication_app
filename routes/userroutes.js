const express = require("express");
const router = express.Router();
const userscontroller = require("../controllers/userscontroller");
const verifyJWT = require("../middleware/verifyJWT");
router.use(verifyJWT);

router.route("/").get(userscontroller.getAllUsers);
module.exports = router;
