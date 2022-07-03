import Navbar from "./Navbar";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses/PopularCourses";
import Divider from "./Divider";
import ExploreCourses from "./ExploreCourses/ExploreCourses";
import Tutors from "./Tutors";
import Tips from "./ExploreCourses/Tips/Tips";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <PopularCourses />
      <Divider />
      <ExploreCourses />
      <Tutors />
      <Divider />
      <Tips />
      <Divider />
    </>
  );
};

export default Home;
