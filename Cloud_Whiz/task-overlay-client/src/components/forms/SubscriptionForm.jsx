import React, { useState } from "react";
import { Formik, Form } from "formik";
import { subscriptionSchema } from "../../schema/subscriptionSchema";
import { addSubscriptionAPI } from "../../apiRoutes/subscription";
import { toast } from "react-hot-toast";
import Input from "./Input";
import Button from "./Button";
import Loader from "../Loader";

const ModalForm = ({ closeHandler }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={subscriptionSchema}
        onSubmit={(formData, { setSubmitting }) => {
          setSubmitting(true);
          addSubscriptionAPI(formData)
            .then(({ data }) => {
              toast.success(data?.message);
              closeHandler(false);
            })
            .catch(({ response }) => {
              setErrorMessage(
                response?.data?.message || "Something went wrong!"
              );
            })
            .finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col justify-center gap-4 md:px-4 py-2">
            <Input type="email" name="email" placeholder="Enter your email" />
            {isSubmitting ? (
              <Button
                type="disabled"
                text={<Loader className={"h-6 w-6"} />}
              ></Button>
            ) : (
              <Button type="submit" text="Subscribe" />
            )}
          </Form>
        )}
      </Formik>
      {errorMessage && (
        <span className="m-1 mx-4 text-red-700 text-sm font-semibold tracking-wider">
          {errorMessage}
        </span>
      )}
    </>
  );
};
export default React.memo(ModalForm);
