import { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Banner */}
      <div className="w-full relative">
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1400&h=400&fit=crop&auto=format"
          alt="contact-banner"
          loading="lazy"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-white/50 z-10"></div>
        <div className="absolute top-[40%] left-6 sm:left-20 md:left-40 text-[#192655] z-11">
          <p className="text-lg sm:text-2xl">Home / Contact</p>
          <h1 className="text-3xl sm:text-4xl font-bold">Our Contacts</h1>
        </div>
      </div>

      <div className="px-4 md:px-[10%] mt-20 mb-10">
        {/* Map image — hospital location related */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&h=500&fit=crop&auto=format"
            alt="hospital location"
            loading="lazy"
            className="h-[35vw] min-h-[200px] w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full py-10 bg-white text-[#1C2752] font-sans">
          {/* Header */}
          <h3 className="text-[#009EE3] font-semibold tracking-widest uppercase">
            Get In Touch
          </h3>
          <h2 className="text-4xl font-bold mt-1 mb-6 text-[#1C2752]">
            Contact
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Contact Form */}
            <div className="w-full bg-[#1C2752] rounded-2xl overflow-hidden">
              {/* Success message */}
              {submitted && (
                <div className="bg-green-500 text-white text-center py-4 px-6 font-semibold text-sm">
                  ✅ Your message has been sent successfully! We'll get back to
                  you soon.
                </div>
              )}

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full px-4 py-3 bg-transparent text-white border-b sm:border-b-0 sm:border-r border-white placeholder-white/70 focus:outline-none focus:bg-white/10 transition-colors ${
                      errors.name ? "border-red-400" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs px-4 pb-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-4 py-3 bg-transparent text-white placeholder-white/70 focus:outline-none focus:bg-white/10 transition-colors ${
                      errors.email ? "border-b border-red-400" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs px-4 pb-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t border-white/30">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-4 py-3 bg-transparent text-white placeholder-white/70 focus:outline-none focus:bg-white/10 transition-colors ${
                    errors.subject ? "border-b border-red-400" : ""
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs px-4 pb-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="border-t border-white/30">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className={`w-full px-4 py-3 bg-transparent text-white h-40 placeholder-white/70 focus:outline-none focus:bg-white/10 transition-colors resize-none ${
                    errors.message ? "border-b border-red-400" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs px-4 pb-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#BFD3F8] py-3 text-[#1C2752] font-semibold hover:bg-blue-300 transition-colors duration-300 hover:scale-[1.01] cursor-pointer"
              >
                SUBMIT
              </button>
            </div>

            {/* Contact Info Boxes */}
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="bg-[#BFD3F8] p-4 rounded-2xl hover:shadow-md transition-shadow duration-300">
                <FaPhoneAlt className="text-[#1C2752] text-xl mb-2" />
                <h4 className="font-bold">EMERGENCY</h4>
                <p className="text-sm">(237) 681-812-255</p>
                <p className="text-sm">(237) 666-331-894</p>
              </div>
              <div className="bg-[#1C2752] text-white p-4 rounded-2xl hover:shadow-md transition-shadow duration-300">
                <FaMapMarkerAlt className="text-[#BFD3F8] text-xl mb-2" />
                <h4 className="font-bold">LOCATION</h4>
                <p className="text-sm">0123 Some place</p>
                <p className="text-sm">9876 Some country</p>
              </div>
              <div className="bg-[#BFD3F8] p-4 rounded-2xl hover:shadow-md transition-shadow duration-300">
                <FaEnvelope className="text-[#1C2752] text-xl mb-2" />
                <h4 className="font-bold">EMAIL</h4>
                <p className="text-sm break-words">fildineeesoe@gmail.com</p>
                <p className="text-sm break-words">myebstudios@gmail.com</p>
              </div>
              <div className="bg-[#BFD3F8] p-4 rounded-2xl hover:shadow-md transition-shadow duration-300">
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
