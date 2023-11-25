import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import bgImg from "../assets/bgImg.jpg";

const HomeLayout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="flex flex-col justify-between w-full"
    >
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
export default HomeLayout;
