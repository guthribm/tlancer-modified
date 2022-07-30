import { useContext } from "react";
import AuthContext from "../../../../store/auth-context";
import photo from "../../../../images/Tutors/no-profile-photo.png";
const NewTutorHero = (props) => {
  const authCTX = useContext(AuthContext);
  return (
    <>
      <style>{`
    .hero-subtitle {
        font-family: 'Work Sans', sans-serif;
        color: var(--dark-blue);
        font-weight: 500;
    }
    .btn-complete-setup {
        font-family: 'Ubuntu', san-serif;
        font-weight: 500;
        color: var(--active-link);
        border: none;
    }
    .btn-complete-setup:hover {
        
        color: var(--dark-blue);
    }
    
  `}</style>
      <section id="new-tutor-section" className="container-fluid p-5">
        <div className="container d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between p-5 my-5">
          <div className="col col-lg-9">
            <h1 className="account-form-label mb-5">
              Hi, <span className="email-accent">{authCTX.userName}</span>
            </h1>
            <p className="hero-subtitle mb-0">
              Complete your account setup today
            </p>
            <button className="btn-complete-setup btn mx-auto ms-lg-0 ps-0 h5">
              Complete account setup{" "}
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
            </button>
          </div>
          <div className="col col-lg-3">
            <img className="img-fluid me-auto" src={photo} alt="no profile" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewTutorHero;
