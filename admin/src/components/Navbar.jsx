import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };

  return (
    <div className="flex justify-between items-center px-4 md:px-[10% py-3 border-b border-b-gray-200 bg-white]">
      <div className="flex items-center gap-2 text-xs">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          MED<span className="text-[#14A2F3]">DICAL</span>
        </h1>
        <p className="border px-2.5 rounded-full py-0.5 border-gray-500 text-gray-600">
          Admin
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-[#14A2F3] text-white text-sm px-10 py-2 rounded-full cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};
export default Navbar;
