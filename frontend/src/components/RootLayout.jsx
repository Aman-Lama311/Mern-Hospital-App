import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Rootlayout = () => {
  return (
    <div>
      <div className="sticky top-0 z-20 bg-white">
        <Banner />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};
export default Rootlayout;
