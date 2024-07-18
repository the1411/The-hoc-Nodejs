const express = require("express");
const {
  getHomepage,
  getAbc,
  getHome,
} = require("../controller/homeController");

const router = express.Router();

router.get("/", getHomepage);

router.get("/abc", getAbc);

router.get("/home", getHome);

module.exports = router;
