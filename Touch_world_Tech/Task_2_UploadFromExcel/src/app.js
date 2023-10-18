const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;

app.use(express.static("public"));

// Middleware to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(express.json());

// Routes
const dataRoutes = require("./routes/data.routes");
app.use("/api/data", dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
