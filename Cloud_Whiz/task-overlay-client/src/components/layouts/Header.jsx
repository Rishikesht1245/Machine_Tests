import { NavLink, Link } from "react-router-dom";
import homeIcon from "../../assets/homeIcon.png";

const Header = () => {
  return (
    <div className="bg-[rgba(0,0,0,.6)] w-[100%] h-14 flex items-center justify-between md:px-8 px-4 text-white">
      <Link to="/" className="flex gap-2 items-center">
        <img
          src={homeIcon}
          alt="Icon"
          className="w-9 h-9 shadow-sm active:animate-ping"
        />
        <h5 className="font-black text-[20px] shadow-sm text-white">Overlay</h5>
      </Link>
      <nav className="w-full flex justify-end md:gap-8 gap-4">
        <NavLink
          className="font-bold"
          to={"/"}
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "",
            textUnderlineOffset: isActive ? "0.4rem" : "",
            color: isActive ? "#DC791C" : "#ffffff",
          })}
        >
          Home
        </NavLink>
        <NavLink
          className="font-bold"
          to={"/settings"}
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "",
            textUnderlineOffset: isActive ? "0.4rem" : "",
            color: isActive ? "#DC791C" : "#ffffff",
          })}
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
