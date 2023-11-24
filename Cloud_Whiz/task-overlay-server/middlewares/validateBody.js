import { errorHandler } from "../utils/error.js";

export const validateBody = (validationSchema) => async (req, res, next) => {
  try {
    req.body = await validationSchema.validate(req.body, {
      stripeUnknown: true,
    });
    next();
  } catch (error) {
    next(errorHandler(401, error.errors?.[0] || "Invalid data"));
  }
};
