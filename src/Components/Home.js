import Navbar from "./Navbar";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses/PopularCourses";
import Divider from "./Divider";
import ExploreCourses from "./ExploreCourses/ExploreCourses";
import Tutors from "./Tutors";
import Tips from "./Tips/Tips";
import Testimonies from "./Testimonies";
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
      <Testimonies />
      <Divider />
      <Tips />
      <Divider />
      <Newsletter />
      <Divider />
    </>
  );
};

export default Home;
