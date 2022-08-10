import Navbar from "../../HomePage/Navbar";
import StudentHero from "./StudentHero";
import Divider from "../../HomePage/Divider";
import FooterLinks from "../../HomePage/FooterLinks";
import StudentCourseNav from "./StudentCourseNav";
import StudentMyCourseHero from "./StudentMyCourseHero";
import StudentNav from "../../../Components/StudentNav";
import StudentCourses from "../../../Components/StudentCourses/StudentCourse";
const StudentMyCoursePage = () => {
  return (
    <>
      
      <StudentNav />     
      <StudentMyCourseHero />
      <StudentCourseNav />
      <StudentCourses />
      <FooterLinks/>
      

     
     
      
       
      
    </>
  );
};

export default StudentMyCoursePage;
