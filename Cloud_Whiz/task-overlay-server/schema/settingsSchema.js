import * as yup from "yup";

export const settingsSchema = yup.object().shape({
  title: yup.string().trim().required("Title is required"),
  targetRule: yup
    .string()
    .oneOf(["homepage"], "Invalid target rule")
    .required("Target rule is required"),
  overlayType: yup
    .string()
    .oneOf(["footerSlideIn", "overlayModal"], "Invalid Overlay type")
    .required("Overlay type is required"),
  displayRule: yup
    .string()
    .oneOf(["oncePerDay", "oncePerSession"], "Invalid display rule")
    .required("Display rule is required"),
});
