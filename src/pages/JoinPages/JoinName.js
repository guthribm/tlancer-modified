import { Link } from "react-router-dom";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-2.webp";
import personIcon from "../../images/Registration/person-icon.svg";
const JoinName = () => {
  console.log("registration 2 rendered");
  return (
    <>
      <style>{`
      #registration-first-name, #registration-last-name {
        border: none;
        width: 100%;
      }
      #registration-first-name:hover, #registration-last-name:hover, #registration-first-name:focus, #registration-last-name:focus {        
        outline: none;
      }
      
      
    `}</style>
      <JoinNav to="/join-email" button="back" />
      <section className="container-fluid registration fade-in d-flex flex-column p-md-5">
        <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
          <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
            <h2 className="account-heading mb-3">Continue to registration</h2>
            <h3 className="h1 display-5 fw-bold account-form-label">
              Type in names
            </h3>
            <div className="w-75 my-3 my-md-5 p-3 registration-name d-flex flex-row align-items-center registration-input">
              <img
                className="me-3"
                src={personIcon}
                alt="person icon"
                width="24"
                height="24"
              />
              <input
                id="registration-first-name"
                className="d-block"
                type={"text"}
                placeholder="First Name"
              />
            </div>

            <div className="w-75 my-3 my-md-5 p-3 registration-name d-flex flex-row align-items-center registration-input">
              <img
                className="me-3"
                src={personIcon}
                alt="person icon"
                width="24"
                height="24"
              />
              <input
                id="registration-last-name"
                className="d-block"
                type={"text"}
                placeholder="Last Name"
              />
            </div>

            <Link
              className="btn-registration btn btn-lg"
              to={"/join-date-of-birth"}
            >
              Next{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down ms-5"
                viewBox="0 0 16 16"
                style={{ transform: "rotate(-90deg)" }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </Link>
          </div>
          <div className="col col-md-5">
            <JoinRightWrapper src={imgSignup} alt="person using laptop" />
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinName;
