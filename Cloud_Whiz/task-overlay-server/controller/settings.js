import { errorHandler } from "../utils/error.js";
import { settingsModel } from "../models/settings.js";

// Creating new settings
export const createSettings = async (req, res, next) => {
  try {
    const newSettings = new settingsModel(req.body);
    await newSettings.save();
    res.status(201).json({ data: newSettings, message: "Settings created!" });
  } catch (error) {
    next(error);
  }
};

// get settings
export const getSettings = async (req, res, next) => {
  try {
    const settings = await settingsModel.find();
    if (settings.length <= 0) return next(errorHandler(404, "No data found"));
    res.status(200).json(settings[0]);
  } catch (error) {
    next(error);
  }
};

// Edit settings
export const editSettings = async (req, res, next) => {
  try {
    const updatedSettings = await settingsModel.findByIdAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ data: updatedSettings, message: "Settings updated!" });
  } catch (error) {
    next(error);
  }
};
