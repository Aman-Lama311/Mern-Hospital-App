import React from "react";
import { FiPhone, FiMapPin, FiMail, FiClock } from "react-icons/fi";
import Title from "./Title";

const contactData = [
  {
    id: 1,
    icon: <FiPhone size={28} />,
    title: "EMERGENCY",
    lines: ["(237) 681-812-255", "(237) 666-331-894"],
    bg: "bg-[#C4D9FD]", // light blue
    textColor: "text-[#192655]",
  },
  {
    id: 2,
    icon: <FiMapPin size={28} />,
    title: "LOCATION",
    lines: ["0123 Some place", "9876 Some country"],
    bg: "bg-[#192655]", // dark blue
    textColor: "text-white",
  },
  {
    id: 3,
    icon: <FiMail size={28} />,
    title: "EMAIL",
    lines: ["fildineeesoe@gmail.com", "myebstudios@gmail.com"],
    bg: "bg-[#C4D9FD]",
    textColor: "text-[#192655]",
  },
  {
    id: 4,
    icon: <FiClock size={28} />,
    title: "WORKING HOURS",
    lines: ["Mon–Sat 09:00–20:00", "Sunday Emergency only"],
    bg: "bg-[#C4D9FD]",
    textColor: "text-[#192655]",
  },
];

const GetInTouch = () => {
  return (
    <div className="px-4 md:px-[10%] py-12">
      {/* headings */}
      <div className="text-center mx-auto mb-10">
        <Title line1={"GET IN TOUCH"} line2={"Contact"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactData.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg px-6 py-10 ${item.bg} ${item.textColor} flex flex-col gap-4`}
          >
            <div className="text-3xl">{item.icon}</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <div className="space-y-1 text-sm">
              {item.lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
