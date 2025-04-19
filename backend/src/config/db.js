const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      console.error("MONGO_URL is not defined in environment variables.");
      process.exit(1);
    }

    const conn = await mongoose.connect(mongoUrl);

    console.log(`Database connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;
