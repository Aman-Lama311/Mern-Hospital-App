import { useNavigate } from "react-router-dom";
import heroImg from "../assets/header_img.png";
import { SlCalender } from "react-icons/sl";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row bg-[#14A2F3] px-4 md:px-[10%] text-white">
      {/* left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <span className="text-3xl font-semibold leading-0">
          CARING FOR LIFE
        </span>
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Leading the Way <br /> in Medical Excellence
        </p>
        <button
          onClick={() => navigate("/services")}
          className="px-6 py-2 bg-[#BFD3F8] rounded-full text-[#202B6D] font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Our Services
        </button>
        <a
          href="#speciality"
          className="px-2 py-3 bg-[#202B6D] rounded-md flex 2xl:hidden gap-4"
        >
          <p>Book an Appointment</p>
          <SlCalender size={25} />
        </a>
      </div>
      {/* right side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto"
          src={heroImg}
          alt="hero-image"
          loading="lazy"
        />
      </div>
      <a
        href="#speciality"
        className="absolute bottom-20 left-[40%] px-4 py-6 bg-[#202B6D] rounded-md hidden 2xl:flex gap-4"
      >
        <p className="text-lg">Book an Appointment</p>
        <SlCalender size={35} />
      </a>
    </div>
  );
};
export default Hero;
