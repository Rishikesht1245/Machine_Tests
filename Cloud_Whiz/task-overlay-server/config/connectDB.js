import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Internal Server error : ", error));
};

export default connectDB;
