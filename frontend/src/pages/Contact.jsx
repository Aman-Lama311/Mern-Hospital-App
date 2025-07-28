import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="w-full relative">
        <img
          src="https://www.emblemhealth.com/content/dam/emblemhealth/images/providers/newsletter/GettyImages-1189304034_web.jpg"
          alt="about-banner"
          loading="lazy"
          className="w-full h-72 object-cover"
        />
        {/* Light white overlay */}
        <div className="absolute inset-0 bg-white/50 z-10"></div>
        <div className="absolute top-[40%] left-40 text-[#192655] z-11">
          <p className="text-2xl">Home/Contact</p>
          <h1 className="text-4xl font-bold">Our Contacts</h1>
        </div>
      </div>
      <div className="px-4 md:px-[10%] mt-20 mb-10">
        <img
          src="https://www.hayleyonhiatus.com/wp-content/uploads/2025/02/new-york-city-neighborhoods-1440x1028.png"
          alt="contact-location"
          loading="lazy"
          className="h-[35vw] w-full object-cover rounded-lg"
        />
        <div className="w-full py-10 bg-white text-[#1C2752] font-sans">
          {/* Header */}
          <h3 className="text-[#009EE3] font-semibold tracking-widest">
            GET IN TOUCH
          </h3>
          <h2 className="text-4xl font-bold mt-1 mb-6 text-[#1C2752]">
            Contact
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Contact Form */}
            <div className="w-full bg-[#1C2752] rounded-md overflow-hidden">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-1/2 px-4 py-3 bg-transparent text-white border-r border-white placeholder-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-1/2 px-4 py-3 bg-transparent text-white placeholder-white focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-transparent text-white border-t border-white placeholder-white focus:outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 bg-transparent text-white border-t border-white h-40 placeholder-white focus:outline-none"
              ></textarea>
              <button className="w-full bg-[#BFD3F8] py-3 text-[#1C2752] font-semibold">
                SUBMIT
              </button>
            </div>

            {/* Contact Info Boxes */}
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="bg-[#BFD3F8] p-4 rounded-md">
                <FaPhoneAlt className="text-[#1C2752] text-xl mb-2" />
                <h4 className="font-bold">EMERGENCY</h4>
                <p className="text-sm">(237) 681-812-255</p>
                <p className="text-sm">(237) 666-331-894</p>
              </div>
              <div className="bg-[#1C2752] text-white p-4 rounded-md">
                <FaMapMarkerAlt className="text-[#BFD3F8] text-xl mb-2" />
                <h4 className="font-bold">LOCATION</h4>
                <p className="text-sm">0123 Some place</p>
                <p className="text-sm">9876 Some country</p>
              </div>
              <div className="bg-[#BFD3F8] p-4 rounded-md">
                <FaEnvelope className="text-[#1C2752] text-xl mb-2" />
                <h4 className="font-bold">EMAIL</h4>
                <p className="text-sm break-words">fildineeesoe@gmail.com</p>
                <p className="text-sm break-words">myebstudios@gmail.com</p>
              </div>
              <div className="bg-[#BFD3F8] p-4 rounded-md">
                <FaClock className="text-[#1C2752] text-xl mb-2" />
                <h4 className="font-bold">WORKING HOURS</h4>
                <p className="text-sm">Mon–Sat 09:00–20:00</p>
                <p className="text-sm">Sunday Emergency only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
