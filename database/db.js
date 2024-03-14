const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.DATABASE_URL;

const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log(`mongoose connected`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = dbConnect;
