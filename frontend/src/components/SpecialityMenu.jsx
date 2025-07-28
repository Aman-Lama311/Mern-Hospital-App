import Title from "./Title";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-10 text-gray-800"
    >
      {/* headings */}
      <div className="text-center mx-auto">
        <Title line1={"ALWAYS CARING"} line2={"Our Specialities"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-5 overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center shrink-0 hover:translate-y-[-10px] transition-all duration-300"
          >
            <img
              className="w-16 sm:w-24 mb-2"
              src={item.image}
              alt="speciality-image"
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SpecialityMenu;
