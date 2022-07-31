import TutorNav from "../../../Components/TutorNav";
import TutorHero from "./TutorHero";
import Divider from "../../HomePage/Divider";
import TutorDashboard from "./TutorDashboard";
import TutorSelfService from "./TutorSelfService";
import SupportSection from "../../../Components/SupportSection";
import TlancerCommunity from "../../../Components/TlancerCommunity";
import FooterLinks from "../../HomePage/FooterLinks";
const TutorPage = () => {
  return (
    <>
      <TutorNav />

      <TutorHero />
      <Divider />
      <TutorDashboard />
      <TutorSelfService />
      <Divider />
      <SupportSection />
      <Divider />
      <TlancerCommunity />
      <Divider />

      <FooterLinks />
    </>
  );
};

export default TutorPage;
