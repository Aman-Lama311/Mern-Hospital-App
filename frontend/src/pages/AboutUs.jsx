import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";

const AboutUs = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full relative">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1400&h=400&fit=crop&auto=format"
          alt="about-banner"
          loading="lazy"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-white/50 z-10"></div>
        <div className="absolute top-[40%] left-6 sm:left-20 md:left-40 text-[#192655] z-11">
          <p className="text-lg sm:text-2xl">Home / About</p>
          <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="py-16 px-4 md:px-[10%]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  {/* Large image */}
                  <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=400&fit=crop&auto=format"
                      loading="lazy"
                      alt="Doctor with patient"
                      className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Two smaller images */}
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGljYWwlMjB0ZWFtfGVufDB8fDB8fHww"
                      loading="lazy"
                      alt="Medical team"
                      className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop&auto=format"
                      loading="lazy"
                      alt="Hospital equipment"
                      className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-blue-900 text-white px-6 py-3 rounded-2xl shadow-lg text-center">
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-blue-200 text-sm">Years of Experience</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-8 mt-8 lg:mt-0">
                <div className="space-y-4">
                  <p className="text-blue-500 font-bold text-xl sm:text-2xl tracking-wider uppercase">
                    Welcome to Hospital Name
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Best Care for Your Good Health
                  </h1>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "A Passion for Healing",
                    "5-Star Care",
                    "All Our Best",
                    "Believe in Us",
                    "Always Caring",
                    "A Legacy of Excellence",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    We are committed to providing world-class healthcare with
                    compassion and dedication. Our team of experienced doctors,
                    nurses, and staff work tirelessly to ensure every patient
                    receives the highest standard of medical care.
                  </p>
                  <p>
                    From routine checkups to complex surgeries, we offer a full
                    range of medical services designed to keep you and your
                    family healthy, safe, and cared for at every step.
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <p className="text-2xl font-bold text-blue-700">1000+</p>
                    <p className="text-gray-500 text-sm mt-1">Happy Patients</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <p className="text-2xl font-bold text-blue-700">50+</p>
                    <p className="text-gray-500 text-sm mt-1">Expert Doctors</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <p className="text-2xl font-bold text-blue-700">20+</p>
                    <p className="text-gray-500 text-sm mt-1">Departments</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg duration-300 shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Blogs />
        <GetInTouch />
      </div>
    </>
  );
};

export default AboutUs;
