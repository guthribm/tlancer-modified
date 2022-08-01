import Navbar from "../../HomePage/Navbar";
<<<<<<< HEAD
//import TutorHero from "./TutorHero";
import ParentHero from "./ParentHero";
import Divider from "../../HomePage/Divider";
//import TutorDashboard from "./TutorDashboard";
import TutorDashboard from "../TutorPage/TutorDashboard";
// import TutorSelfService from "./TutorSelfService";
import ParentSelfService from "./ParentSelfService";
// import TutorSupportSection from "./TutorSupportSection";
import TutorSupportSection from "../TutorPage/TutorSupportSection";
=======
import ParentHero from "./ParentHero";
import Divider from "../../HomePage/Divider";
import TutorDashboard from "../TutorPage/TutorDashboard";
import ParentSelfService from "./ParentSelfService";
>>>>>>> main
import ParentLearnMore from "./ParentLearnMore";
import TlancerCommunity from "../../../Components/TlancerCommunity";
import FooterLinks from "../../HomePage/FooterLinks";
import NewCourses from "../../../Components/NewCourses/NewCourses";
const TutorPage = () => {
  return (
    <>
      <Navbar />
      <ParentHero />
      <Divider />
      <TutorDashboard />
<<<<<<< HEAD
      <ParentLearnMore/>
      <ParentSelfService />
      <Divider />
      <NewCourses />
      <Divider />
      <TlancerCommunity />
=======
      <Divider />
      <ParentLearnMore />
      <ParentSelfService />
      <NewCourses />
      <Divider />
      <TlancerCommunity />
      <Divider />
>>>>>>> main
      <FooterLinks />
    </>
  );
};

export default TutorPage;
