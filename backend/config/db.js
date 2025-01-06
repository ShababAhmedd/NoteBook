const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Log the MongoDB URI for debugging purposes
    console.log("MongoDB URI:", process.env.MONGO_URI);

    // Using async/await to connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Ensure it exits with failure
  }
};

module.exports = connectDB;
