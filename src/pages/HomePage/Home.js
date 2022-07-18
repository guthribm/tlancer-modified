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
import Login from "../../pages/JoinPages/Login";
import ChooseAccount from "../../pages/JoinPages/ChooseAccount";
import JoinEmail from "../../pages/JoinPages/JoinEmail";
import JoinName from "../../pages/JoinPages/JoinName";
import JoinDateOfBirth from "../../pages/JoinPages/JoinDateOfBirth";
import JoinLocation from "../../pages/JoinPages/JoinLocation";
import JoinPhoneNumber from "../../pages/JoinPages/JoinPhoneNumber";
import JoinPassword from "../JoinPages/JoinPassword";
import VerifyEmail from "../JoinPages/VerifyEmail";
import JoinDataSent from "../JoinPages/JoinDataSent";
import { useState } from "react";

const Home = () => {
  console.log("home rendered");

  const [accountType, setAccountType] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // let joinData = {
  //   type: accountType,
  //   email: email,
  //   first_name: firstName,
  //   last_name: lastName,
  //   dob: date,
  //   location: location,
  //   password: password,
  // };

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
              <ChooseAccount setAccountType={setAccountType} />
            </>
          }
        />

        <Route
          path="/email"
          element={
            <>
              <JoinEmail setEmail={setEmail} />
            </>
          }
        />

        <Route
          path="/names"
          element={
            <>
              <JoinName setFirstName={setFirstName} setLastName={setLastName} />
            </>
          }
        />

        <Route
          path="/date-of-birth"
          element={
            <>
              <JoinDateOfBirth setDate={setDate} />
            </>
          }
        />

        <Route
          path="/location"
          element={
            <>
              <JoinLocation setLocation={setLocation} />
            </>
          }
        />

        <Route
          path="/phone-number"
          element={
            <>
              <JoinPhoneNumber setPhone={setPhone} />
            </>
          }
        />

        <Route
          path="/password"
          element={
            <>
              <JoinPassword setPassword={setPassword} />
            </>
          }
        />

        <Route
          path="/data-sent"
          element={
            <>
              <JoinDataSent />
            </>
          }
        />

        <Route
          path="/verify-account"
          element={
            <>
              <VerifyEmail />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default Home;
