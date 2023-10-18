const express = require("express");
const router = express.Router();
const { uploadData } = require("../controllers/data.controller");

const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), uploadData);

module.exports = router;
