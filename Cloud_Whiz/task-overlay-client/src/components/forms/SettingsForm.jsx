import { useState, useMemo, useContext } from "react";
import { Formik, Form } from "formik";
import Input from "./Input";
import SelectInput from "./SelectInput";
import Loader from "../../components/Loader.jsx";
import { toast } from "react-hot-toast";
import { settingsSchema } from "../../schema/settingsSchema.js";
import {
  createSettingsAPI,
  editSettingsAPI,
} from "../../apiRoutes/settings.js";
import Button from "./Button.jsx";
import { settingsContext } from "../../store/SettingsContext.jsx";

const SettingsForm = ({ fetchHandler }) => {
  const { settings, loading } = useContext(settingsContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const overlayOptions = useMemo(() => [
    { value: "footerSlideIn", text: "Footer slide in" },
    { value: "overlayModal", text: "Overlay modal" },
  ]);

  const displayOptions = useMemo(() => [
    { value: "oncePerSession", text: "Once per session" },
    { value: "oncePerDay", text: "Once per day" },
  ]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={
            settings
              ? settings
              : {
                  title: "",
                  targetRule: "homePage",
                  overlayType: "",
                  displayRule: "",
                }
          }
          validationSchema={settingsSchema}
          onSubmit={(formData, { setSubmitting }) => {
            setSubmitting(true);
            const submitHandler = settings
              ? () => editSettingsAPI(formData, settings?._id)
              : () => createSettingsAPI(formData);
            submitHandler()
              .then(({ data }) => {
                setSettings(data.data);
                toast.success(data.message);
              })
              .catch(({ response }) => {
                setErrorMessage(
                  response?.data?.message || "Something went wrong!"
                );
                setSettings(null);
              })
              .finally(() => setSubmitting(false));
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4 justify-center">
              <Input
                type="text"
                placeholder="Title"
                name="title"
                edit={settings ? true : false}
              />
              <SelectInput
                name="targetRule"
                label="Target rule"
                options={[{ text: "Home page", value: "homepage" }]}
                edit={settings ? true : false}
              />
              <SelectInput
                name="overlayType"
                label="Overlay type"
                options={overlayOptions}
                edit={settings ? true : false}
              />
              <SelectInput
                name="displayRule"
                label="Display rule"
                options={displayOptions}
                edit={settings ? true : false}
              />
              {isSubmitting ? (
                <Button
                  type="disabled"
                  text={<Loader className={"h-6 w-6"} />}
                ></Button>
              ) : (
                <Button type="submit" text={settings ? "Update" : "Save"} />
              )}
            </Form>
          )}
        </Formik>
      )}
      {errorMessage && (
        <span className="m-1 text-red-700 text-sm font-semibold tracking-wider">
          {errorMessage}
        </span>
      )}
    </>
  );
};
export default SettingsForm;
