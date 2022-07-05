import Navbar from "./Navbar";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses/PopularCourses";
import Divider from "./Divider";
import ExploreCourses from "./ExploreCourses/ExploreCourses";
import Tutors from "./Tutors";
import Tips from "./ExploreCourses/Tips/Tips";
import Newsletter from "./Newsletter";

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
      <Newsletter />
      <Divider />
    </>
  );
};

export default Home;
