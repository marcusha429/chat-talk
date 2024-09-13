const express = require('express');
const { registerUser, authUser, allUsers } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware")
const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers); // protect middleware before moving on to allUsers
router.post('/login', authUser);

module.exports = router;