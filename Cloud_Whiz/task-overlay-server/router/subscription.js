import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { settingsSchema } from "../schema/settingsSchema.js";
import {
  createSettings,
  editSettings,
  getSettings,
} from "../controller/settings.js";
import { validateId } from "../middlewares/validateParams.js";

const subscription = Router();

// test route
subscription.get("/test", (req, res) => {
  res.json("Subscription route is working!!!");
});

// settings form

subscription
  .route("/settings/:_id?")
  .get(getSettings)
  .post(validateBody(settingsSchema), createSettings)
  .put(validateId, validateBody(settingsSchema), editSettings);

export default subscription;
