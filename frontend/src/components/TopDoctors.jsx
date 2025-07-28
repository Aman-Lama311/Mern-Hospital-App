import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center mt-14 px-4 md:px-[10%]">
      {/* headers */}
      <div className="text-center mx-auto">
        <Title line1={"TRUSTED CARE"} line2={"Our top Doctors"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {doctors.slice(0, 8).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-gray-100 shadow-xl rounded-md cursor-pointer hover:translate-y-[-10px] transition-all duration-300"
          >
            <img src={item.image} alt="top-doctors" />
            <div className="flex flex-col items-start justify-center p-4">
              <div
                className={`flex items-center gap-2  ${
                  item.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <p
                  className={`w-2.5 h-2.5  rounded-full ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  }`}
                ></p>
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>
              <h1 className="text-lg font-medium">{item.name}</h1>
              <p>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="px-12 py-2.5 rounded-full bg-blue-50 text-gray-600 my-10 cursor-pointer hover:bg-blue-100"
      >
        More
      </button>
    </div>
  );
};
export default TopDoctors;
