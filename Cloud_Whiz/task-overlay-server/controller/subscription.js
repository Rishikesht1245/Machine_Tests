import { subscriptionModel } from "../models/subscription.js";
import { errorHandler } from "../utils/error.js";

//  add subscription
export const newSubscription = async (req, res, next) => {
  try {
    const isSubscribedUser = await subscriptionModel.findOne({
      email: req.body.email,
    });
    if (isSubscribedUser)
      return next(errorHandler(409, "Already subscribed user!"));
    const newSubscription = new subscriptionModel(req.body);
    await newSubscription.save();
    res.status(201).json({ message: "Subscription added!" });
  } catch (error) {
    next(error);
  }
};
