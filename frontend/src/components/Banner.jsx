import { BsTelephoneOutbound } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex justify-between items-center py-4 px-4 sm:px-[10%]">
      <h1
        onClick={() => navigate("/")}
        className="text-4xl font-semibold cursor-pointer"
      >
        MED<span className="text-[#14A2F3]">DICAL</span>{" "}
      </h1>
      <div className="flex items-baseline gap-6">
        <div className="flex items-center gap-3">
          <BsTelephoneOutbound size={30} />
          <div className="font-semibold">
            <p>EMERGENCY</p>
            <span className="text-[#14A2F3]">(237) 681-812-255</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoTimeOutline size={35} />
          <div className="font-semibold">
            <p>WORK HOUR</p>
            <span className="text-[#14A2F3]">09:00 - 20:00 Everyday</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoLocationOutline size={35} />
          <div className="font-semibold">
            <p>LOCATION</p>
            <span className="text-[#14A2F3]">0123 Some Place</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
