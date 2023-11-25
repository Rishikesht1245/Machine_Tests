import * as yup from "yup";

export const subscriptionSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .test("isValidEmail", "Invalid e-mail", (arg) =>
      /[a-z0-9]+@[a-z0-9]+.com/i.test(arg)
    )
    .required("Email is required"),
});
