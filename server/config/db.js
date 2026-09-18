const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/notes_db";

const connectDB = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log(`MongoDB connected successfully -> ${MONGO_URI}`);
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
      console.error(
        "Make sure a local MongoDB daemon is running (e.g. `mongod` or `brew services start mongodb-community`)."
      );
    });
};

module.exports = connectDB;
