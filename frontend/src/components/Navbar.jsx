import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import dropdownIcon from "../assets/dropdown_icon.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center bg-[#202B6D] text-white py-4 px-4 sm:px-[10%]">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl sm:text-3xl font-semibold block md:hidden"
      >
        MED<span className="text-[#14A2F3]">DICAL</span>
      </h1>

      {/* Desktop Nav Links */}
      <div className="space-x-8 text-[17px] hidden md:block">
        {["/", "/about", "/services", "/doctors", "/news", "/contact"].map(
          (path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive ? "text-[#BFD3F8] font-medium" : ""
              }
            >
              {
                ["Home", "About Us", "Services", "Doctors", "News", "Contact"][
                  i
                ]
              }
            </NavLink>
          ),
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {token ? (
          <div
            className="profile-dropdown flex items-center gap-2 cursor-pointer relative"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <img
              className="w-8 rounded-full"
              src={userData.image}
              alt="profile"
            />
            {/* Arrow rotates up when open, down when closed */}
            <img
              className={`w-3 transition-transform duration-300 ${
                dropdownOpen ? "rotate-0" : "rotate-180"
              }`}
              src={dropdownIcon}
              alt="dropdown_icon"
            />

            {/* Dropdown — toggles on click */}
            {dropdownOpen && (
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => {
                      navigate("/my-profile");
                      setDropdownOpen(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate("/my-appointments");
                      setDropdownOpen(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/Login")}
            className="px-6 py-2 bg-[#BFD3F8] rounded-full text-[#202B6D] font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Create Account
          </button>
        )}

        {/* Hamburger icon */}
        <HiMenuAlt1
          className="md:hidden"
          onClick={() => setShowMenu(true)}
          size={28}
        />

        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-30 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <h1
              onClick={() => navigate("/")}
              className="text-3xl font-semibold block md:hidden text-black"
            >
              MED<span className="text-[#14A2F3]">DICAL</span>
            </h1>
            <IoMdClose
              onClick={() => setShowMenu(false)}
              size={28}
              color="#000"
            />
          </div>
          <ul className="text-black flex flex-col gap-3 px-5 mt-5 text-2xl font-medium">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/doctors", label: "Doctors" },
              { path: "/news", label: "News" },
              { path: "/contact", label: "Contact" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive ? "text-[#14A2F3] font-medium" : ""
                  }
                  to={link.path}
                >
                  {link.label}
                </NavLink>
                <hr className="bg-zinc-300 h-[.5px] border-none" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
