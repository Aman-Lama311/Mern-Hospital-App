import React, { useState } from "react";
import { FaHeart, FaPlus, FaTint, FaStethoscope } from "react-icons/fa";
import Title from "./Title";
import { Link } from "react-router-dom";

const Service = () => {
  const services = [
    {
      icon: <FaStethoscope className="w-6 h-6" />,
      title: "Free Checkup",
      customIcon: true,
      description:
        "Our free checkup service provides basic health screenings for all patients. Early detection saves lives — visit us for a comprehensive health assessment at no cost.",
      features: [
        "Blood pressure check",
        "BMI assessment",
        "Vision screening",
        "Basic blood tests",
        "Consultation with doctor",
        "Health advice",
      ],
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Cardiogram",
      customIcon: false,
      description:
        "Our cardiology department provides advanced ECG and heart monitoring services. Our experienced cardiologists ensure your heart health is in the best hands.",
      features: [
        "ECG monitoring",
        "Heart rate analysis",
        "Stress testing",
        "24hr Holter monitor",
        "Echo cardiography",
        "Expert cardiologists",
      ],
    },
    {
      icon: <FaPlus className="w-6 h-6" />,
      title: "DNA Testing",
      customIcon: false,
      description:
        "Cutting-edge DNA testing services to help identify genetic conditions, ancestry, and personalized treatment plans tailored specifically to your genetic profile.",
      features: [
        "Genetic screening",
        "Ancestry analysis",
        "Disease risk assessment",
        "Personalized reports",
        "Expert counseling",
        "Confidential results",
      ],
    },
    {
      icon: <FaTint className="w-6 h-6" />,
      title: "Blood Bank",
      customIcon: false,
      description:
        "Our blood bank operates 24/7 to ensure safe and adequate blood supply for all patients in need. Donate blood today and save a life in your community.",
      features: [
        "24/7 availability",
        "Safe blood storage",
        "All blood types",
        "Rapid testing",
        "Emergency supply",
        "Donation drives",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const activeService = services[activeIndex];

  return (
    <div className="px-4 md:px-[10%] py-10 min-h-screen">
      <div className="text-center mx-auto max-w-4xl my-8">
        <Title line1="CARE YOU CAN BELIEVE IN" line2="Our Services" />
      </div>

      <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="w-full xl:w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-6 text-center transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "bg-blue-900 text-white"
                    : "border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                }`}
              >
                {service.customIcon ? (
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-105">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`mb-4 flex justify-center ${
                      activeIndex === index ? "text-white" : "text-blue-600"
                    }`}
                  >
                    {service.icon}
                  </div>
                )}
                <h3
                  className={`font-semibold text-lg ${
                    activeIndex === index ? "text-white" : "text-gray-800"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
            ))}

            <Link to={"/services"}>
              <div className="p-6 bg-blue-900 text-center cursor-pointer hover:bg-blue-800 transition-colors duration-300">
                <h3 className="font-semibold text-white text-lg">
                  View All Services
                </h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Content Area — changes based on active tab */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100 transition-all duration-300">
            <div className="max-w-4xl">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 leading-tight">
                {activeService.title}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></div>
                    <span className="text-gray-700 text-lg font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>{activeService.description}</p>
              </div>

              <Link to={"/services"}>
                <div className="mt-10">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                    Learn More About {activeService.title}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="w-full xl:w-80 flex-shrink-0 space-y-3">
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-56 relative group shadow-lg">
            <img
              src="https://img.freepik.com/premium-photo/african-young-man-mask-measuring-pulse-pregnant-woman-caring-about-her-health-hospital_236854-30954.jpg"
              alt="Doctor examining patient"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden h-72 relative group shadow-lg">
            <img
              src="https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2018/10/03/medical.jpg"
              alt="Medical team of three doctors"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="bg-blue-900 rounded-2xl p-6 text-white shadow-lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">25+</h3>
              <p className="text-blue-200">Years of Experience</p>
            </div>
            <div className="border-t border-blue-700 mt-4 pt-4 text-center">
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-blue-200">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
