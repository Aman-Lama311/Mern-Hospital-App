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
        "We provide free health checkups to ensure everyone has access to basic medical care. Early detection is the key to a longer, healthier life.",
      icon: FaStethoscope,
      variant: "blue",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Heart Care",
      description:
        "Our cardiology unit is equipped with the latest technology to diagnose and treat all heart-related conditions with precision and care.",
      icon: FaHeartbeat,
      variant: "white",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Expert Doctors",
      description:
        "Our team of highly qualified doctors brings years of experience across multiple specialties to provide you with the best medical guidance.",
      icon: FaUserMd,
      variant: "blue",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Emergency Care",
      description:
        "Our 24/7 emergency care unit is always ready to respond swiftly and effectively to any medical emergency, day or night.",
      icon: FaAmbulance,
      variant: "white",
      image:
        "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&h=400&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Pharmacy Services",
      description:
        "Our in-house pharmacy provides a full range of medications, managed by certified pharmacists who ensure safe and accurate dispensing.",
      icon: FaPills,
      variant: "white",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "Hospital Care",
      description:
        "From admission to recovery, our hospital care team ensures every patient receives attentive, compassionate, and world-class inpatient treatment.",
      icon: FaHospital,
      variant: "blue",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&auto=format",
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="w-full relative">
        <img
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&h=400&fit=crop&auto=format"
          alt="services-banner"
          loading="lazy"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-white/50 z-10"></div>
        <div className="absolute top-[40%] left-6 sm:left-20 md:left-40 text-[#192655] z-11">
          <p className="text-lg sm:text-2xl">Home / Services</p>
          <h1 className="text-3xl sm:text-4xl font-bold">Our Services</h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4 md:px-[10%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isBlue = service.variant === "blue";

              return (
                <div
                  key={service.id}
                  className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                  style={{ minHeight: "380px" }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${service.id}medical/600/400`;
                      }}
                    />
                    {/* Overlay */}
                    {isBlue ? (
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: "rgba(25, 38, 85, 0.88)" }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-white/92" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                            isBlue
                              ? "bg-white/20 text-white border-2 border-white/30"
                              : "text-white"
                          }`}
                          style={
                            !isBlue
                              ? {
                                  backgroundColor: "#192655",
                                }
                              : {}
                          }
                        >
                          <IconComponent size={28} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-2xl font-bold mb-4 ${
                          isBlue ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed mb-6 ${
                          isBlue ? "text-white/85" : "text-gray-600"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More */}
                    <div className="mt-auto">
                      <button
                        className={`inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:translate-x-1 cursor-pointer ${
                          isBlue
                            ? "text-cyan-300 hover:text-white"
                            : "text-[#192655] hover:text-blue-800"
                        }`}
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
