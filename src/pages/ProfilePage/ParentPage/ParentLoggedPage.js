<<<<<<< HEAD
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
=======
import ParentNav from "../../../Components/ParentNav";
import ParentLoggedHero from "./ParentLoggedHero";
import Divider from "../../HomePage/Divider";
import TlancerCommunity from "../../../Components/TlancerCommunity";
import FooterLinks from "../../HomePage/FooterLinks";
import NewCourses from "../../../Components/NewCourses/NewCourses";
import AssesmentCourse from "../../../Components/AssesmentCourses/AssesmentCourse";
>>>>>>> main
const ParentLoggedPage = () => {
  return (
    <>
      <ParentNav />
      <ParentLoggedHero />
      <Divider />
<<<<<<< HEAD
      <TutorDashboard />
      <Divider />
      <ChildProgress />
      <ParentLearnMore />
      <ParentSelfService />
      <AssesmentCourse  heading="Assesments"/>     
      <NewCourses  heading="payal's favourite courses"/> 
=======

      <AssesmentCourse heading="Assesments" />

      <NewCourses heading="Courses we recommend for Payal" />
>>>>>>> main
      <Divider />
      <TlancerCommunity />
      <Divider />
      <FooterLinks />
    </>
  );
};
<<<<<<< HEAD
export default ParentLoggedPage;
=======
export default ParentLoggedPage;
>>>>>>> main
