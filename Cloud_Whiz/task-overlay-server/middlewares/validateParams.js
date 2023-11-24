import validator from "validator";
import { errorHandler } from "../utils/error.js";

export const validateId = (req, res, next) => {
  if (!req.params._id || !validator.isMongoId(req.params._id)) {
    return next(errorHandler(404, "Bad request"));
  }
  next();
};
