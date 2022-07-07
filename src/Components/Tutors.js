import tutors from "../images/tutors.webp";
import logoTutors from "../images/logoTutors.svg";
const Tutors = () => {
  return (
    <>
      <style>{`
        #tutors-section {
            background: #f6fbe7;
            color: #00274C;
        }
        #tutors-section p, #tutors-section li {
          font-family: 'Work Sans', sans-serif;
          font-weight: 500;
          font-size: 1.5rem;
        }
        .tutors-heading {
          font-family: 'Work Sans', sans-serif;
          font-weight: 500;
        }
        .tutor-display {
          font-family: 'Ubuntu', san-serif;
          font-weight: 500;
          font-size: 3.35rem;
        }
        li {
          margin: .5rem auto;
        }
        .tutor-span {
          font-family: 'Work Sans', sans-serif;
        }
        .cta-btn {
          background: #0ebe6a;
          color: #fff;
          font-weight: 500;
          font-family: 'Ubuntu', san-serif;
        }

        
        @media (max-width: 768px) {
          .cta-btn {
            width: 100%;
          }
          .tutor-display {
            font-size: 2.5rem;
          }
          #tutors-section li {
            font-size: 1rem;
          }
          #tutors-container {
            position: relative;
          }
          #tutor-title {
            position: absolute;
            top: 1.5rem;
            left: 0;
            right: 0;
            margin: auto;
          }
          #tutor-image-container {
            margin-top: 5rem;
          }

        }
    `}</style>
      <section id="tutors-section" className="container-fluid p-md-5 mb-5">
        <div
          id="tutors-container"
          className="container d-flex flex-column-reverse flex-md-row justify-content-center"
        >
          <div className="col col-md-6">
            <div
              id="tutor-title"
              className="d-flex align-items-center justify-content-center justify-content-md-start my-3"
            >
              <img
                className="img-fluid"
                src={logoTutors}
                alt="tlancer"
                width="107"
                height="28"
              />
              <h2 className="h4 ms-2 pt-1 tutors-heading">tutors</h2>
            </div>

            <h3
              id="tutor-heading"
              className="tutor-display my-4 text-center text-md-start"
            >
              You know it, You can teach it.
              <span className="tutor-span fw-bold"> Become a tutor.</span>
            </h3>
            <p className="my-4 pe-md-5 text-center text-md-start">
              Hackton is the leading online coding tutor for beginners join us
              today to take a step further.
            </p>
            <ul className="pt-1 ps-4 tutor-list">
              <li>Upload and manage your courses</li>
              <li>Purus augue in sed nam enim.</li>
              <li>
                Sollicitudin sapien non lectus at. Sollicitudin sapien non
                lectus at.
              </li>
            </ul>
            <button className="btn btn-lg cta-btn px-md-5 mt-4 mx-auto mb-5">
              Sign Up as a tutor
            </button>
          </div>
          <div id="tutor-image-container" className="col col-md-6">
            <img
              className="img-fluid my-3"
              src={tutors}
              alt="tutors using laptops"
              width="919"
              height="723"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutors;
