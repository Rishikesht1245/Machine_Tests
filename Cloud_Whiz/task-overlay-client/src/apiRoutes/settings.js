import { SubscriptionAPI } from "../config/api";

// fetch settings
export const fetchSettingsAPI = async () =>
  await SubscriptionAPI.get("/settings");

// Post settings
export const createSettingsAPI = async (formData) =>
  await SubscriptionAPI.post("/settings", formData);

// Edit settings
export const editSettingsAPI = async (formData, _id) =>
  await SubscriptionAPI.put(`/settings/${_id}`, formData);
