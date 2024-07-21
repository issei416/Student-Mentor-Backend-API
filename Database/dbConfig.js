import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
      const connection = await mongoose.connect(process.env.DbConnectionString);
      console.log("MongoDB Connected");
      return connection;
  } catch (error) {
      console.log(error);
  }
};

export default connectDB;
