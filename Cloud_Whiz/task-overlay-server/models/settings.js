import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  targetRule: {
    type: String,
    required: [true, "Target rule is required"],
    enum: {
      values: ["homepage"],
      message: "Invalid target rule ({VALUE})",
    },
  },
  overlayType: {
    type: String,
    required: [true, "Overlay type is required"],
    enum: {
      values: ["footerSlideIn", "overlayModal"],
      message: "Invalid overlay type ({VALUE})",
    },
  },
  displayRule: {
    type: String,
    required: [true, "Display rule is required"],
    enum: {
      values: ["oncePerDay", "oncePerSession"],
      message: "Invalid display rule ({VALUE})",
    },
  },
});

export const settingsModel = mongoose.model("Settings", settingsSchema);
