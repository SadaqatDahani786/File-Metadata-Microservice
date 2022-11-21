/**
 ** **
 ** ** ** IMPORTS
 ** **
 **/
const express = require("express");
const cors = require("cors");
const PORT = 3000;

/**
 ** **
 ** ** ** INIT
 ** **
 **/
const app = express();

/**
 ** **
 ** ** ** MIDDLEWARES
 ** **
 **/
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

/**
 ** **
 ** ** ** ROUTES
 ** **
 **/
app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

/*
 ** **
 ** ** ** HTTP SERVER
 ** **
 */
app.listen(PORT, () => {
  console.log(`Web Server Running On Port:\t[${PORT}]`);
});
