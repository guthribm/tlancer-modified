import Navbar from "../../HomePage/Navbar";
import TutorHero from "./TutorHero";
import Divider from "../../HomePage/Divider";
import TutorDashboard from "./TutorDashboard";
import TutorSupportSection from "./TutorSupportSection";
import TlancerCommunity from "../../../Components/TlancerCommunity";
import FooterLinks from "../../HomePage/FooterLinks";
const TutorPage = () => {
  return (
    <>
      <Navbar />
      <TutorHero />
      <Divider />
      <TutorDashboard />
      <Divider />
      <TutorSupportSection />
      <Divider />
      <TlancerCommunity />
      <FooterLinks />
    </>
  );
};

export default TutorPage;
