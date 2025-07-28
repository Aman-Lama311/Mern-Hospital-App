import React from "react";
import { FiSend, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#192655] text-white px-4 md:px-[10%] py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-bold text-[#C4D9FD]">MEDDICAL</h2>
          <p className="mt-4 leading-relaxed text-[#c4cde1]">
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="flex flex-col gap-2 text-[#c4cde1]">
            <Link to={"/"}>Home</Link>
            <Link to={"/doctors"}>Doctors</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/about"}>About Us</Link>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-[#c4cde1] text-sm">
            <li>Call: (237) 681-812-255</li>
            <li>Email: fildineeesoe@gmail.com</li>
            <li>Address: 0123 Some place</li>
            <li>Some country</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded-l-md text-[#192655] bg-[#C4D9FD] placeholder:text-[#192655] outline-none"
            />
            <button className="px-4 bg-[#C4D9FD] text-[#192655] rounded-r-md">
              <FiSend size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-[#c4cde166]" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#c4cde1] text-sm">
        <p>© 2021 Hospital’s name All Rights Reserved by PNTEC–LTD</p>
        <div className="flex gap-4 text-lg">
          <div className="p-2 rounded-full bg-[#CDD9FD] hover:translate-y-[-5px] transition-all duration-300">
            <FiLinkedin size={13} className="text-[#192655] cursor-pointer" />
          </div>
          <div className="p-2 rounded-full bg-[#CDD9FD] hover:translate-y-[-5px] transition-all duration-300">
            <FiFacebook size={13} className="text-[#192655] cursor-pointer" />
          </div>
          <div className="p-2 rounded-full bg-[#CDD9FD] hover:translate-y-[-5px] transition-all duration-300">
            <FiInstagram size={13} className="text-[#192655] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
