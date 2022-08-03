import Navbar from "../../HomePage/Navbar";
import ParentHero from "./ParentHero";
import Divider from "../../HomePage/Divider";
import TutorDashboard from "../TutorPage/TutorDashboard";
import ParentSelfService from "./ParentSelfService";
import ParentLearnMore from "./ParentLearnMore";
import TlancerCommunity from "../../../Components/TlancerCommunity";
import FooterLinks from "../../HomePage/FooterLinks";
import NewCourses from "../../../Components/NewCourses/NewCourses";
import AssesmentCourse from "../../../Components/AssesmentCourses/AssesmentCourse";
const TutorPage = () => {
  return (
    <>
      <Navbar />
      <ParentHero />
      <Divider />
      <TutorDashboard />
      <Divider />
      <ParentLearnMore />
      <ParentSelfService />
      <AssesmentCourse />
      <NewCourses  heading="payal's favourite courses"/> 
      <Divider />
      <TlancerCommunity />
      <Divider />
      <FooterLinks />
    </>
  );
};