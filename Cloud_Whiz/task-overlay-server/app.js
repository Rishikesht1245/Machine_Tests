import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import subscriptionRoutes from "./router/subscription.js";
import { config } from "dotenv";
config();

const app = express();
app.use(express.json());
connectDB();

app.use("/api/v1/subscription", subscriptionRoutes);

// middleware for error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // internal server error
  //mongo duplicate error || custom Error or Internal server error
  const message =
    (err.code === 11000 && "User Already Exists") ||
    err.message ||
    "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
