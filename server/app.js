require("dotenv").config();
const express = require("express");
const Sequelize = require("sequelize");
const app = express();
var cors = require("cors");
var cookie = require("cookie");
const bodyParser = require("body-parser");
// const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const levelRoute = require("./routes/level");
const facultyRoute = require("./routes/faculty");
const departmentRoute = require("./routes/department");
const studentRoute = require("./routes/student");
const reportRoute = require("./routes/report");
const uploadRoute = require("./routes/upload");
const Op = Sequelize.Op;
let corsOptions = {
  origin: "http://localhost:5000",
};
app.use(cors());
const {
  endPoint,
} = require("./config/constant");

app.use(express.json({ limit: "50mb" }));
//body parser

app.use(bodyParser.json());

// cors

app.use("/public", express.static("public"));
app.use("/uploads/", express.static("uploads/"));

app.get("/ping", async (req, res) => {
  // let pay = await generatePayment();
  res.json({
    success: true,
    message: "Server Running ",
    // pay: pay,
  });
});
// Routes
app.use(endPoint + "auth", authRoute);
app.use(endPoint + "user", userRoute);
app.use(endPoint + "level", levelRoute);
app.use(endPoint + "faculty", facultyRoute);
app.use(endPoint + "department", departmentRoute);
app.use(endPoint + "student", studentRoute);
app.use(endPoint + "report", reportRoute);
app.use(endPoint + "upload", uploadRoute);
app.listen(process.env.APP_PORT, () => {
  console.log("server is running on port :", process.env.APP_PORT);
});
