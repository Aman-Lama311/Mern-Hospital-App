import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

const RelatedDoctors = ({ docId, speciality }) => {
  const [relDoc, setRelDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center mt-14 px-4 md:px-[10%]">
      {/* headers */}
      <div className="text-center mx-auto">
        <Title line1={"TRUSTED CARE"} line2={"Related Doctors"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="border border-gray-100 shadow-xl rounded-md cursor-pointer hover:translate-y-[-10px] transition-all duration-300"
          >
            <img src={item.image} alt="top-doctors" />
            <div className="flex flex-col items-start justify-center p-4">
              <div className="flex items-center gap-2">
                <p className="w-2.5 h-2.5 bg-green-500 rounded-full"></p>
                <p>Avilable</p>
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
export default RelatedDoctors;
