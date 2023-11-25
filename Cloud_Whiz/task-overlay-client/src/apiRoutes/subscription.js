import { SubscriptionAPI } from "../config/api";

export const addSubscriptionAPI = async (formData) =>
  await SubscriptionAPI.post("/subscribe", formData);
