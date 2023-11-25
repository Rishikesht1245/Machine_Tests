import { useContext, useEffect, useState } from "react";
import { settingsContext } from "../store/SettingsContext";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import ModalForm from "../components/forms/SubscriptionForm";

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
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative">
          <div className="flex items-center justify-center w-full">
            <div className="parent-container">
              <h1 className="text-center">Home</h1>
            </div>
          </div>
          {showForm && (
            <Modal
              type={settings?.overlayType}
              isOpen={showForm}
              heading={settings?.title}
              closeHandler={setShowForm}
            >
              <ModalForm closeHandler={setShowForm} />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};
export default Home;
