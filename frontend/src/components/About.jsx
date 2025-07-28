import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Title from "./Title";

const About = () => {
  return (
    <div className="w-full px-4 md:px-[10%] mt-20 flex flex-col gap-5">
      {/* headings */}
      <div className="text-center mx-auto max-w-3xl">
        <Title
          line1={"WELCOME TO MEDICAL"}
          line2={"A Great Place to Recieve Care"}
        />
        <p className="my-4 text-gray-800 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit
          quasi distinctio magnam maxime qui enim. Quasi laboriosam, velit
          veniam expedita delectus magnam repudiandae asperiores assumenda illum
          fugiat sapiente consectetur!
        </p>
        <Link
          to={"/about"}
          className=" text-[#14A2F3] flex items-center justify-center gap-2 mt-6 group"
        >
          <p>Learn More</p>
          <p className="group-hover:translate-x-1 transition-all duration-300">
            <FaArrowRightLong color="#202B6D" size={18} />
          </p>
        </Link>
      </div>
      <div className="my-10">
        <img
          loading="lazy"
          src="https://manicauniversity.com/images/pictures/School_of_Medicine.png"
          alt="group-doctors"
        />
      </div>
    </div>
  );
};
export default About;
