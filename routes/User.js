const express = require("express");
const router = express.Router();

const {
  sortValues,
  getOperationCode
} = require("../controllers/User");

router.route("/bfhl").post(sortValues).get(getOperationCode);

module.exports = router;