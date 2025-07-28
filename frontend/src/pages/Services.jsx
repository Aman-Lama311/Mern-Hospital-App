import {
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaAmbulance,
  FaPills,
  FaHospital,
} from "react-icons/fa";
import GetInTouch from "../components/GetInTouch";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Free Checkup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
      icon: FaStethoscope,
      variant: "blue",
    },
    {
      id: 2,
      title: "Free Checkup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
      icon: FaHeartbeat,
      variant: "white",
    },
    {
      id: 3,
      title: "Free Checkup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
      icon: FaUserMd,
      variant: "white",
    },
    {
      id: 4,
      title: "Emergency Care",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
      icon: FaAmbulance,
      variant: "white",
    },
    {
      id: 5,
      title: "Pharmacy Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
      icon: FaPills,
      variant: "blue",
    },
    {
      id: 6,
      title: "Hospital Care",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
      icon: FaHospital,
      variant: "white",
    },
  ];
  return (
    <>
      <div className="w-full relative">
        <img
          src="https://nursemidwifealliance.co.ke/wp-content/uploads/2024/02/innerbanner.jpg"
          alt="about-banner"
          loading="lazy"
          className="w-full h-72 object-cover"
        />
        {/* Light white overlay */}
        <div className="absolute inset-0 bg-white/50 z-10"></div>
        <div className="absolute top-[40%] left-40 text-[#192655] z-11">
          <p className="text-2xl">Home/Services</p>
          <h1 className="text-4xl font-bold">Our Services</h1>
        </div>
      </div>
      <div className="py-16 px-4 md:px-[10%]">
        <div className="max-w-7xl mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isOverlay = service.variant === "overlay";

              return (
                <div
                  key={service.id}
                  className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                  style={{ minHeight: "400px" }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    {isOverlay ? (
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: "rgba(25, 38, 85, 0.85)" }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-white bg-opacity-95" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      {/* Icon Circle */}
                      <div className="mb-6">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                            isOverlay
                              ? "bg-white bg-opacity-20 text-white border-2 border-white border-opacity-30"
                              : "text-white border-2 border-opacity-30"
                          }`}
                          style={
                            !isOverlay
                              ? {
                                  backgroundColor: "#192655",
                                  borderColor: "#192655",
                                }
                              : {}
                          }
                        >
                          <IconComponent className="w-8 h-8" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-2xl font-bold mb-4 ${
                          isOverlay ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed mb-6 ${
                          isOverlay
                            ? "text-white text-opacity-90"
                            : "text-gray-600"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <div className="mt-auto">
                      <button
                        className={`inline-flex items-center space-x-2 font-semibold text-sm transition-all duration-200 group-hover:translate-x-1 ${
                          isOverlay
                            ? "text-cyan-300 hover:text-white"
                            : "hover:text-opacity-80"
                        }`}
                        style={!isOverlay ? { color: "#192655" } : {}}
                      >
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
};
export default Services;
