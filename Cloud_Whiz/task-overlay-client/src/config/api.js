import axios from "axios";

export const SubscriptionAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/subscription`,
});
