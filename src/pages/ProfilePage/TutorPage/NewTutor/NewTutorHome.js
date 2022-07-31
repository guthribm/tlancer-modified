import NewTutorHero from "./NewTutorHero";
import TutorNoCourses from "./TutorNoCourses";
import Divider from "../../../HomePage/Divider";
import SupportSection from "../../../../Components/SupportSection";
import NewTutorCalendar from "./NewTutorCalendar";
import FooterLinks from "../../../HomePage/FooterLinks";

const NewTutorHome = () => {
  return (
    <>
      <NewTutorHero />
      <Divider />
      <TutorNoCourses />
      <Divider />
      <NewTutorCalendar />
      <Divider />
      <SupportSection />
      <Divider />
      <FooterLinks />
    </>
  );
};
export default NewTutorHome;
