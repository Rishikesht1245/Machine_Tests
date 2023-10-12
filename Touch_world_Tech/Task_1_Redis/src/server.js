import express from "express";
import dataRoutes from "./routes/data.routes.js";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", dataRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
