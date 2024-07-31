const connection = require("../config/database");

const getHomepage = (req, res) => {
  let user = [];
  connection.query("SELECT * FROM users", function (err, results, fields) {
    user = results;
    console.log("results:", results);
    // console.log("field:", fields);
    console.log("user:", user);
    console.log("check user:", user);
    res.send(JSON.stringify(user));
  });
};
const getAbc = (req, res) => {
  res.send("Abc");
};
const getHome = (req, res) => {
  res.render("./sample.ejs");
};
const getHomePage = (req, res) => {
  res.render("./homepage.ejs");
};
module.exports = {
  getHomePage,
  getAbc,
  getHome,
};
