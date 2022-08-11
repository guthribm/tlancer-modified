import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
const StudentCourseNav = () => {
  

  const authCTX = useContext(AuthContext);
  console.log("authCTX value: " + JSON.stringify(authCTX));

  return (
    <>
      <style>{`
        .tutors-sup {
            font-family: 'Work Sans', sans-serif;
            color: var(--dark-blue);
            font-weight: 600;
        }
        #student-nav-logo {
            text-decoration: none;
        }
      
        header {
          overflow-x: hidden;
        }
        nav {
            font-family: 'Work Sans', sans-serif;
            z-index: 100;
        }
        .nav-link {
            color: var(--dark-blue);
            font-size: 20px;          
        }
        .navbar-toggler:focus {
          border-width: 2px;
        }
        .active {
            font-weight: bold;
            text-decoration: dashed underline;
            text-decoration-color: var(--active-link);
            text-underline-offset: 6px;
        }        
        .btn-nav {
            border: 1px solid var(--dark-blue);
            color: var(--dark-blue);
            width: 96px;
            height: 36px;
            font-family: 'Ubuntu', san-serif;
            font-weight: medium;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;            
        }
       
        
        .nav-btn-container {
          display: flex;
          align-items: center;
        }
       
        @media (max-width: 1024px) {
          
          .nav-item:first-of-type {
            padding-top: 3rem;
          }
        }
        .margin-from-left{
            margin-left:30px;
        }
        .nav-link:hover{
         font-weight:bold;
        }
        .default-font-weight{
          font-weight:bold;
        }
        .default-color{
          color: #808080;
        }
        .new-left{
          margin-left:30px;
        }
        
    `}</style>
            <section id="parent-section" className="container-fluid new-left">
        <div className="container  flex-column-reverse flex-md-row align-items-center">
            <div className="d-flex">
                
                  
                  <Link
                    to={"/student/courses"}
                    className="nav-link text-nowrap  default-font-weight default-color"
                    aria-current="page"
                    
                    
                    
                  >
                    All My Courses
                  </Link>
                   

                  <Link
                    to={"/student/courses/inProgress"}
                    className="nav-link text-nowrap margin-from-left default-color"
                    aria-current="page"
                  >
                    MyCourses
                  </Link>  

                  <Link
                    to={"/student/courses/completed"}
                    className="nav-link text-nowrap margin-from-left default-color"
                    aria-current="page"
                  >
                    Completed
                  </Link> 

                  <Link
                    to={"/student/retake"}
                    className="nav-link text-nowrap margin-from-left"
                    aria-current="page"
                    style={{ color: "#ffaf00"}}
                  >
                    Retake
                  </Link>    
            </div>
        </div>
      </section>
    </>
  );
};
export default StudentCourseNav;
