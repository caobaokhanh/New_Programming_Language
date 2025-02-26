const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const initRoutes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
app.use(
  cors({
    origin:
      process.env.CLIENT_URL || "https://mern-project-theta-puce.vercel.app",
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
const port = process.env.PORT || 8888;
app.use(express.json()); // app can be read json data
app.use(express.urlencoded({ extended: true })); // app can be read url encoded data
dbConnect();
initRoutes(app);

app.listen(port, () => {
  console.log("Server listening on " + port);
});
