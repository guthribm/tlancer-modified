import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
const StudentCourseNav = () => {
  console.log("navbar rendered");

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
        .left_test{
            margin-left:0px;
        }
    `}</style>
      <header className="contianer-fluid">
        <nav className="navbar px-3 navbar-expand-lg navbar-light bg-white fixed-top ">
          <div className="container  mx-auto px-0">
             
            <div className="collapse navbar-collapse" id="navbar">
                
              <ul className="navbar-nav text-center">
            
                <li className="nav-item">
                  <Link
                    to={"/student/courses"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    All My Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/student/courses/inProgress"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    In Progress
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/student/courses/completed"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Completed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/student/retake"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Retake
                  </Link>
                </li>
              </ul>


        
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default StudentCourseNav;