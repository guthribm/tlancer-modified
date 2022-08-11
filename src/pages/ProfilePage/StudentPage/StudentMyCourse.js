import Navbar from "../../HomePage/Navbar";
import StudentHero from "./StudentHero";
import Divider from "../../HomePage/Divider";
import FooterLinks from "../../HomePage/FooterLinks";
import StudentCourseNav from "./StudentCourseNav";
import StudentMyCourseHero from "./StudentMyCourseHero";
import StudentNav from "../../../Components/StudentNav";
import StudentCourses from "../../../Components/StudentCourses/StudentCourse";
import TutorCourse from "../../../Components/TutorCourses/TutorCourse";
import SavedCourses from "../../../Components/SavedCourses/SavedCourses";   

    
const StudentMyCoursePage = () => {
  return (
    <>
      
      <StudentNav />     
      <StudentMyCourseHero />
      <StudentCourseNav />
      <StudentCourses />
      <TutorCourse/>
      <SavedCourses heading="Saved Courses" />
      <FooterLinks/>
      

     
     
      
       
      
    </>
  );
};

export default StudentMyCoursePage;
