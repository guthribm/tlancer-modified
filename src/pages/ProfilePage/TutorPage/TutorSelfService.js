import selfServ from "../../../images/Tutors/tutor-dashboard-image.webp";
import selfServLogo from "../../../images/Tutors/tutorLogo.png";

const TutorSelfService = (props) => {
  return (
    <>
      <style>{`
    #self-serve-container {
        background: rgba(223,240,255,0.3)
    }
    #self-serve-text-container {
        font-family: 'Ubuntu', san-serif;
        font-weight: medium;
        color: var(--dark-blue);
        border-left: 1px solid #808080
    }
    .service-text {
        font-family: 'Work Sans', sans-serif;
        color: #808080;
    }
    .not-active {
        color: #808080;
    }
    `}</style>
      <section
        id="self-serve-container"
        className="container-fluid my-5 p-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row my-5 p-lg-5">
          <div className="container">
            <img
              className="img-fluid"
              src={selfServ}
              alt="coffee cup and magazine"
              width="515"
              height="514"
            />
          </div>
          <div id="self-serve-text-container" className="container px-0">
            <div className="container p-lg-5 my-5">
              <div className="container d-flex align-items-start justify-content-center justify-content-lg-start px-0 mb-5">
                <h2 className="pe-2 fw-bold h1">Why</h2>
                <img
                  className="img-fluid pt-1"
                  src={selfServLogo}
                  alt="logo"
                  width={"114"}
                  height={"25"}
                />

                <h2 className="ps-2 fw-bold h1">?</h2>
              </div>

              <h3 className="fw-bold mb-3 text-center text-lg-start">
                Self service dashboard
              </h3>
              <p className="service-text text-center text-lg-start">
                Hackton is the leading online coding tutor for beginners join us
                today to take a step further.
              </p>

              <h3 className="fw-bold my-5 not-active">wide range of users</h3>
              <h3 className="fw-bold my-5 not-active">Quick setup</h3>
              <h3 className="fw-bold my-5 not-active">247 customer support</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TutorSelfService;
