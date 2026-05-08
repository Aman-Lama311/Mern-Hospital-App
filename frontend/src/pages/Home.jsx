import About from "../components/About";
import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
import Service from "../components/Service";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <SpecialityMenu />
      <TopDoctors />
      <Blogs />
      <GetInTouch />
    </div>
  );
};
export default Home;
