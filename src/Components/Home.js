import Navbar from "./Navbar";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses/PopularCourses";
import Divider from "./Divider";
import ExploreCourses from "./ExploreCourses/ExploreCourses";
import Tutors from "./Tutors";
import Tips from "./Tips/Tips";
import Testimonies from "./Testimonies";
import Newsletter from "./Newsletter";
import FooterLinks from "./FooterLinks";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/JoinPages/Login";
import ChooseAccount from "../pages/JoinPages/ChooseAccount";
import JoinEmail from "../pages/JoinPages/JoinEmail";
import JoinName from "../pages/JoinPages/JoinName";
import JoinDateOfBirth from "../pages/JoinPages/JoinDateOfBirth";
import JoinLocation from "../pages/JoinPages/JoinLocation";
import JoinPhoneNumber from "../pages/JoinPages/JoinPhoneNumber";

const Home = () => {
  console.log("home rendered");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
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
              <FooterLinks />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />

        <Route
          path="/join"
          element={
            <>
              <ChooseAccount />
            </>
          }
        />

        <Route
          path="/join-email"
          element={
            <>
              <JoinEmail />
            </>
          }
        />

        <Route
          path="/join-names"
          element={
            <>
              <JoinName />
            </>
          }
        />

        <Route
          path="/join-date-of-birth"
          element={
            <>
              <JoinDateOfBirth />
            </>
          }
        />

        <Route
          path="/join-location"
          element={
            <>
              <JoinLocation />
            </>
          }
        />

        <Route
          path="/join-phone-number"
          element={
            <>
              <JoinPhoneNumber />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default Home;
