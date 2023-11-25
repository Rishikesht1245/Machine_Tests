import SettingsForm from "../components/forms/SettingsForm";

const Settings = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="parent-container">
        <h1 className="text-center font-bold my-4">Settings Form</h1>
        <SettingsForm />
      </div>
    </div>
  );
};
export default Settings;
