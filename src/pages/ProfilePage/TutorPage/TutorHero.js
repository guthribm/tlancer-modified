import { Link } from "react-router-dom";
import tutorHero from "../../../images/Tutors/tutorHero.webp";
import JoinRightWrapper from "../../JoinPages/JoinRightWrapper";
const TutorHero = () => {
  return (
    <>
      <style>{`
        #tutor-section {
            margin-top: 8rem;
            color: #00274C;
        }
        #tutor-section p {
            font-family: 'Work Sans', san-serif;
            font-weight: 400;
            color: #6C757D;
        }
        .tutor-heading {
            font-family: 'Ubuntu', san-serif;
            font-weight: 500;
        }
        .tutor-accent {
            font-family: 'Work Sans', san-serif;
            font-weight: bold;
        }
      `}</style>
      <section id="tutor-section" className="container-fluid p-lg-5">
        <div className="container d-flex flex-column-reverse flex-md-row align-items-center p-lg-5 mb-5">
          <div className="col col-md-7 pe-md-5 text-center text-lg-start mt-5">
            <h1 className="tutor-heading fw-500 display-4">
              You know it, You can teach it.{" "}
              <span className="tutor-accent display-4">Become a tutor.</span>
            </h1>
            <p className="my-4 h4">
              Hackton is the leading online coding tutor for beginners join us
              today to take a step further.
            </p>
            <Link
              to={"/tutor/new-tutor"}
              className="btn-get-started btn btn-lg mt-5 mx-auto ms-lg-0"
            >
              Get Started{" "}
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
          <div className="col col-md-5 ps-md-5">
            <JoinRightWrapper
              id="tutor-hero-img"
              src={tutorHero}
              alt="woman and open laptop"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default TutorHero;
