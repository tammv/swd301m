var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var User = require("../models/user");

router.use(bodyParser.json());

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
