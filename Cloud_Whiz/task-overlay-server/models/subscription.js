import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Subscriber must have an email"],
    trim: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        return /[a-z0-9]+@[a-z0-9]+.com/i.test(email);
      },
      message: "Invalid email",
    },
  },
});

export const subscriptionModel = mongoose.model(
  "Subscription",
  subscriptionSchema
);
