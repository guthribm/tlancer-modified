import Navbar from "../../HomePage/Navbar";
import ParentNav from "../../../Components/ParentNav";
import ParentLoggedHero from "./ParentLoggedHero";
import Divider from "../../HomePage/Divider";
import TutorDashboard from "../TutorPage/TutorDashboard";
import ParentSelfService from "./ParentSelfService";
import ParentLearnMore from "./ParentLearnMore";
import TlancerCommunity from "../../../Components/TlancerCommunity";
import FooterLinks from "../../HomePage/FooterLinks";
import AssesmentCourses from "../../../Components/AssesmentCourses/AssesmentCourse";
import NewCourses from "../../../Components/NewCourses/NewCourses";
import AssesmentCourse from "../../../Components/AssesmentCourses/AssesmentCourse";
import ChildProgress from "../../../pages/ProfilePage/ParentPage/ChildProgress"
const ParentLoggedPage = () => {
  return (
    <>
      <ParentNav />
      <ParentLoggedHero />
      <Divider />
      <TutorDashboard />
      <Divider />
      <ChildProgress />
      <ParentLearnMore />
      <ParentSelfService />
      <AssesmentCourse  heading="Assesments"/>     
      <NewCourses  heading="payal's favourite courses"/> 
      <Divider />
      <TlancerCommunity />
      <Divider />
      <FooterLinks />
    </>
  );
};
export default ParentLoggedPage;