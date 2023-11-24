import { subscriptionModel } from "../models/subscription.js";

//  add subscription
export const newSubscription = async (req, res, next) => {
  try {
    const newSubscription = new subscriptionModel(req.body);
    await newSubscription.save();
    res.status(201).json("Subscription added!");
  } catch (error) {
    next(error);
  }
};
