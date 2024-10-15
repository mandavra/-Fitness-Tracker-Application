require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { userService } = require("./services/");
const app = express();

const options = {
  origin: "*",
};
app.use(cors(options));

//body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cookies
app.use(cookieParser());

//routes
app.use("/v1", routes);




//DB connect
connectDB();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started "); 
});