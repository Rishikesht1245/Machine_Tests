import loaderIcon from "../assets/loaderIcon.png";

const Loader = ({ className }) => {
  return (
    <div className="text-center h-[full] flex items-center justify-center">
      <img
        className={`h-10 w-10 animate-spin ${className}`}
        src={loaderIcon}
        alt=""
      />
    </div>
  );
};
export default Loader;
