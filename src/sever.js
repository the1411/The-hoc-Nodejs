// const express = require("express");
// const path = require("path");
// require("dotenv").config();
// // const port = 8080;
// const app = express();
// const port = process.env.PORT;
// const hostname = process.env.HOST_NAME;

// //config template engine
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// //import express from 'express'
// console.log("check env:", process.env);

// //khai bao route
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/home", (req, res) => {
//   res.render("sample.ejs");
// });

// app.listen(port, hostname, () => {
//   console.log(`Example app listening on port ${port}`);
// });
require("dotenv").config();
const express = require("express");
const path = require("path");
const webRoute = require("./route/web");
const { getHomePage, getAbc, getHome } = require("./controller/homeController");
const connection = require("./config/database");

const configViewEngine = require("./config/viewEngine");
const app = express();
const port = process.env.PORT || 8081; // Sử dụng cổng mặc định nếu biến môi trường không có
const hostname = process.env.HOST_NAME || "localhost"; // Sử dụng hostname mặc định nếu biến môi trường không có

app.use(express.static(path.join(__dirname, "public")));
// Config template engine
configViewEngine(app);

// Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/user", webRoute);

// Thêm xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//simple query
// connection.query("SELECT * FROM users", function (err, results, fields) {
//   console.log("results:", results);
//   // console.log("field:", fields);
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
