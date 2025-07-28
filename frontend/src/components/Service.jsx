import React from "react";
import { FaHeart, FaPlus, FaTint, FaStethoscope } from "react-icons/fa";
import Title from "./Title";
import { Link } from "react-router-dom";

const Service = () => {
  const services = [
    {
      icon: <FaStethoscope className="w-6 h-6" />,
      title: "Free Checkup",
      isActive: false,
      customIcon: true,
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Cardiogram",
      isActive: true,
      customIcon: false,
    },
    {
      icon: <FaPlus className="w-6 h-6" />,
      title: "DNA Testing",
      isActive: false,
      customIcon: false,
    },
    {
      icon: <FaTint className="w-6 h-6" />,
      title: "Blood Bank",
      isActive: false,
      customIcon: false,
    },
  ];

  const features = [
    "A Passion for Healing",
    "5-Star Care",
    "All our best",
    "Believe in Us",
    "A Legacy of Excellence",
    "Always Caring",
  ];

  return (
    <div className="px-4 md:px-[10%] py-10 min-h-screen">
      {/* Title Section */}
      <div className="text-center mx-auto max-w-4xl my-8">
        <Title line1="CARE YOU CAN BELIEVE IN" line2="Our Services" />
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left Sidebar - Services Menu */}
        <div className="w-full xl:w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 text-center transition-all duration-300 hover:bg-gray-50 cursor-pointer ${
                  service.isActive
                    ? "bg-blue-900 text-white"
                    : "border-b border-gray-100 last:border-b-0"
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
                      service.isActive ? "text-white" : "text-blue-600"
                    }`}
                  >
                    {service.icon}
                  </div>
                )}
                <h3
                  className={`font-semibold text-lg ${
                    service.isActive ? "text-white" : "text-gray-800"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
            ))}

            {/* View All Button */}
            <Link to={"/services"}>
              <div className="p-6 bg-blue-900 text-center cursor-pointer hover:bg-blue-800 transition-colors duration-300">
                <h3 className="font-semibold text-white text-lg">
                  View All Services
                </h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
            <div className="max-w-4xl">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 leading-tight">
                A passion for putting patients first.
              </h1>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></div>
                    <span className="text-gray-700 text-lg font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description Text */}
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>

              {/* CTA Button */}
              <Link to={"/services"}>
                <div className="mt-10">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                    Learn More About Our Services
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="w-full xl:w-80 flex-shrink-0 space-y-3">
          {/* Top Image - Doctor with Patient */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-56 relative group shadow-lg">
            <img
              src="https://img.freepik.com/premium-photo/african-young-man-mask-measuring-pulse-pregnant-woman-caring-about-her-health-hospital_236854-30954.jpg"
              alt="Doctor examining patient"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Bottom Image - Medical Team */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-72 relative group shadow-lg">
            <img
              src="https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2018/10/03/medical.jpg"
              alt="Medical team of three doctors"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Stats Card */}
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
