import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.js";
import { settingsSchema } from "../schema/settingsSchema.js";
import {
  createSettings,
  editSettings,
  getSettings,
} from "../controller/settings.js";
import { validateId } from "../middlewares/validateParams.js";
import { newSubscription } from "../controller/subscription.js";
import { emailSchema } from "../schema/emailSchema.js";

const subscription = Router();

// test route
subscription.get("/test", (req, res) => {
  res.json("Subscription route is working!!!");
});

// settings
subscription
  .route("/settings/:_id?")
  .get(getSettings)
  .post(validateBody(settingsSchema), createSettings)
  .put(validateId, validateBody(settingsSchema), editSettings);

//Subscription
subscription.post("/subscribe", validateBody(emailSchema), newSubscription);

export default subscription;
