const express = require("express");

const app = express();
require("dotenv").config();
app.use(express.json());

const connectDB = require("./config/connectDB");
const routes = require("./routes/User");
connectDB();

const port = 5000;
app.use("/api/user", routes);

app.listen(port, (err) => {
  err
    ? console.log("err", err)
    : console.log(`this server is running on ${port}`);
});
