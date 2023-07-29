require("dotenv").config()
const mongoose = require("mongoose");
const pass = process.env.password
const MONGO_URI = `mongodb+srv://Toshbaba:${pass}tosh.e022gw2.mongodb.net/socialApp?retryWrites=true&w=majority`

async function connectDb() {
  try {
    // mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URI);
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
