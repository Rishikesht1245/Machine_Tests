const ExcelJS = require("exceljs");
const { uploadFile, validateAndInsertData } = require("../models/data.model");

exports.uploadData = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileBuffer = req.file.buffer;
    const data = await uploadFile(fileBuffer);
    await validateAndInsertData(data);

    return res.status(200).json({ message: "Data uploaded successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
