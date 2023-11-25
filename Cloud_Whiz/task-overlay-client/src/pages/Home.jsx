import { useContext, useEffect, useState } from "react";
import { settingsContext } from "../store/SettingsContext";
import Loader from "../components/Loader";

const Home = () => {
  const { settings, loading } = useContext(settingsContext);
  const [showForm, setShowForm] = useState(false);

  // setting the form to display based on display rule
  useEffect(() => {
    if (settings?.displayRule === "oncePerDay") {
      const today = new Date().toDateString();
      const lastDisplayedDay = localStorage.getItem("lastDisplayedDay");
      if (lastDisplayedDay !== today) {
        localStorage.setItem("lastDisplayedDay", today);
        return setShowForm(true);
      }
      setShowForm(false);
    } else if (settings?.displayRule === "oncePerSession") {
      const isFormShown = sessionStorage.getItem("isFormShown");
      if (!isFormShown) {
        sessionStorage.setItem("isFormShown", "true");
        return setShowForm(true);
      }
      setShowForm(false);
    }
  }, [settings?.displayRule]);
  return <>{loading ? <Loader /> : <div>Hello</div>}</>;
};
export default Home;
