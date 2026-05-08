import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Title from "./Title";

const About = () => {
  return (
    <div className="w-full px-4 md:px-[10%] mt-20 flex flex-col gap-5">
      {/* Headings */}
      <div className="text-center mx-auto max-w-3xl">
        <Title
          line1={"WELCOME TO MEDICAL"}
          line2={"A Great Place to Receive Care"}
        />
        <p className="my-4 text-gray-800 text-lg">
          We are committed to providing world-class healthcare with compassion
          and dedication. Our experienced team of doctors and specialists work
          tirelessly to ensure every patient receives the highest standard of
          medical care in a safe and welcoming environment.
        </p>
        <Link
          to={"/about"}
          className="text-[#14A2F3] flex items-center justify-center gap-2 mt-6 group"
        >
          <p>Learn More</p>
          <p className="group-hover:translate-x-1 transition-all duration-300">
            <FaArrowRightLong color="#202B6D" size={18} />
          </p>
        </Link>
      </div>

      {/* Image */}
      <div className="my-10 overflow-hidden rounded-2xl shadow-lg">
        <img
          loading="lazy"
          src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbCUyMHRlYW18ZW58MHx8MHx8fDA%3D"
          alt="medical team of doctors"
          className="w-full h-[50vw] max-h-[500px] object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=1400&h=600&fit=crop&auto=format";
          }}
        />
      </div>
    </div>
  );
};
export default About;
