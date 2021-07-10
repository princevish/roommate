require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/config");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const path = require("path");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(compression({ level: 6 }));

// multer errors
app.use(function (err, req, res, next) {
  res.status(500).json({ err: err });
});
app.use(express.static("views"));
app.use("/upload", express.static("upload"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});
app.use("/api", require("./routes"));
app.get('*',(req,res)=>{
 res.sendFile(path.resolve(__dirname, "views", "index.html"));
})

const port = process.env.PORT || 8080;
const ip = process.env.IP || '0.0.0.0';
app.listen(port,ip, () =>
  console.log(`Example app listening on port port! ${port}`)
);
