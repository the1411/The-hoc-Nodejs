const express = require("express");
const app = express();
const {
  getHomePage,
  getAbc,
  getHome,
} = require("../controller/homeController");

const router = express.Router();

router.get("/", getHomePage);

router.get("/abc", getAbc);

router.get("/home", getHome);

module.exports = router;
