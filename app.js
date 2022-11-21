/**
 ** **
 ** ** ** IMPORTS
 ** **
 **/
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const PORT = 3000;

/**
 ** **
 ** ** ** INIT
 ** **
 **/
const app = express();
const upload = multer({
  storage: multer.memoryStorage(),
});

/**
 ** **
 ** ** ** MIDDLEWARES
 ** **
 **/
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(upload.single("upfile"));

/**
 ** **
 ** ** ** ROUTES
 ** **
 **/
/*
 ** ===============================================
 ** ROUTE [INDEX FILE]
 ** ===============================================
 */
app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

/*
 ** ===============================================
 ** ROUTE [FILE UPLOAD]
 ** ===============================================
 */
app.route("/api/file-upload").post((req, res) => {
  //1) Get fields data
  const fileName = req.file.originalname;
  const fileType = req.file.mimetype;
  const fileSize = req.file.size;

  //2) Send a response
  res.status(200).json({
    name: fileName,
    type: fileType,
    size: fileSize,
  });
});

/*
 ** **
 ** ** ** HTTP SERVER
 ** **
 */
app.listen(PORT, () => {
  console.log(`Web Server Running On Port:\t[${PORT}]`);
});
