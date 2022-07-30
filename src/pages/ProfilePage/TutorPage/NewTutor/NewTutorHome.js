import NewTutorHero from "./NewTutorHero";
import TutorNoCourses from "./TutorNoCourses";
import Divider from "../../../HomePage/Divider";
import TutorSupportSection from "../TutorSupportSection";
import FooterLinks from "../../../HomePage/FooterLinks";

const NewTutorHome = () => {
  return (
    <>
      <NewTutorHero />
      <Divider />
      <TutorNoCourses />
      <Divider />
      <TutorSupportSection />
      <Divider />
      <FooterLinks />
    </>
  );
};
export default NewTutorHome;
