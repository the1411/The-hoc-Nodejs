const getHomepage = (req, res) => {
  res.send("Hoc backend cung the");
};
const getAbc = (req, res) => {
  res.send("Abc");
};
const getHome = (req, res) => {
  res.render("./sample.ejs");
};
module.exports = {
  getHomepage,
  getAbc,
  getHome,
};
