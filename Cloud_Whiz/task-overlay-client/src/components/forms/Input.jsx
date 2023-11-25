import { Field, ErrorMessage } from "formik";

const Input = ({ name, placeholder, className, type, edit }) => {
  return (
    <div className={`${className} flex flex-col`}>
      {edit && (
        <label
          htmlFor={name}
          className="text-sm font-semibold mb-1 ml-1 text-blue-900 tracking-widest"
        >
          {placeholder}
        </label>
      )}
      <Field
        className="rounded-md px-4 py-2 shadow outlie-none border-none focus:outline-none w-full"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <span className="m-1 text-red-700 text-sm font-semibold tracking-wider">
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};
export default Input;
