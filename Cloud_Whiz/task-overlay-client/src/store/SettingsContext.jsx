import { useState, useEffect, createContext, useCallback } from "react";
import { fetchSettingsAPI } from "../apiRoutes/settings";

export const settingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  //fetch settings
  const fetchSettings = useCallback(() => {
    setLoading(true);
    fetchSettingsAPI()
      .then(({ data }) => {
        setSettings(data);
      })
      .catch(({ response }) => {
        toast.error(response?.data?.message || "Something went wrong!");
        setSettings(null);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <settingsContext.Provider value={{ settings, loading }}>
      {children}
    </settingsContext.Provider>
  );
};
