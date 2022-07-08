import Navbar from "./Navbar";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses/PopularCourses";
import Divider from "./Divider";
import ExploreCourses from "./ExploreCourses/ExploreCourses";
import Tutors from "./Tutors";
import Tips from "./Tips/Tips";
import Testimonies from "./Testimonies";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Registration from "../pages/Registration";
import RegistrationTwo from "../pages/Registration2";
import RegistrationThree from "../pages/Registration3";

const Home = () => {
  console.log("home rendered");
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
            }
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration-two" element={<RegistrationTwo />} />
          <Route path="/registration-three" element={<RegistrationThree />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default Home;
