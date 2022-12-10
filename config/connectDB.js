const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database  connected");
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = connectDB;
