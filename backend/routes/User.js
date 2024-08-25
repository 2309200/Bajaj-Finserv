const express = require("express");
const router = express.Router();

const {
  getAllUser,
  createUser,
  
} = require("../controllers/User");

router.route("/").post(createUser).get(getAllUser);

module.exports = router;