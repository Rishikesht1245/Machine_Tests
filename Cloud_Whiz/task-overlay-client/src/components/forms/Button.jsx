const Button = ({ className, text, type }) => {
  return (
    <button
      type={type}
      className={`${className} px-4 w-full bg-primary text-white font-semibold rounded-md py-2`}
    >
      {text}
    </button>
  );
};
export default Button;
