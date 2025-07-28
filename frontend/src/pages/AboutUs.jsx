import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";

const AboutUs = () => {
  return (
    <>
      <div className="w-full relative">
        <img
          src="https://manicauniversity.com/images/pictures/School_of_Medicine.png"
          alt="about-banner"
          loading="lazy"
          className="w-full h-72 object-cover"
        />
        {/* Light white overlay */}
        <div className="absolute inset-0 bg-white/50 z-10"></div>
        <div className="absolute top-[40%] left-40 text-[#192655] z-11">
          <p className="text-2xl">Home/About</p>
          <h1 className="text-4xl font-bold">About us</h1>
        </div>
      </div>
      <div className="w-full">
        <div className="py-16 px-4 md:px-[10%]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-lg">
                  <img
                    src="https://www.agrijob.co.za/wp-content/uploads/2022/03/black-women-with-stethoscope.jpg"
                    loading="lazy"
                    alt="Healthcare professionals"
                    className="w-full h-[40vw] object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <p className="text-blue-500 font-bold text-2xl tracking-wider uppercase">
                    Welcome to Hospital Name
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Best Care for Your Good Health
                  </h1>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">
                      A Passion for Healing
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">
                      5-Star Care
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">
                      All our best
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">
                      Believe in Us
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">
                      Always Caring
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">
                      A Legacy of Excellence
                    </span>
                  </div>
                </div>

                {/* Description Text */}
                <div className="space-y-4 text-gray-600 leading-relaxed">
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
                <div className="pt-4">
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
