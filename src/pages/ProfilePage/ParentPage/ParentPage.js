import Navbar from "../../HomePage/Navbar";
import ParentHero from "./ParentHero";
import Divider from "../../HomePage/Divider";
import TutorDashboard from "../TutorPage/TutorDashboard";
import ParentSelfService from "./ParentSelfService";
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
      <ParentLearnMore />
      <ParentSelfService />
      <Divider />
      <NewCourses />
      <Divider />
      <TlancerCommunity />
      <FooterLinks />
    </>
  );
};

export default TutorPage;
