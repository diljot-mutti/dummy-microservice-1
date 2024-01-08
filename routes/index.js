var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/ping", function (req, res, next) {
  res.send("pong from Service 1");
});

module.exports = router;
