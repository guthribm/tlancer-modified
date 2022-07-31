import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../images/logo.webp";
import AuthContext from "../store/auth-context";
const TutorNav = () => {
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

        #tutor-nav-logo {
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
            padding-top: 5rem;
          }
        }
    `}</style>
      <header className="contianer-fluid">
        <nav className="navbar px-3 navbar-expand-lg navbar-light bg-white fixed-top w-100">
          <div className="container mt-2 mx-auto px-0">
            <div className="d-flex align-items-center w-100">
              <Link id="tutor-nav-logo" to="/tutor">
                <img
                  className="home-logo p-1"
                  src={logo}
                  alt="Tlancer"
                  width={"374"}
                  height={"90"}
                />
                <span className="tutors-sup h4 mx-2">tutors</span>
              </Link>

              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/courses"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/attendance"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Attendance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/students"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Students
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/sales"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Sales
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/analytics"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Analytics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/assignments"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Assignments
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
export default TutorNav;
