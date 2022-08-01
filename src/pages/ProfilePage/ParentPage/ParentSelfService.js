import selfServ from "../../../images/Tutors/tutor-dashboard-image.webp";
import chevUp from "../../../images/Tutors/chevron-up.png";
import chevDown from "../../../images/Tutors/chevron-down.png";

const ParentSelfService = (props) => {
  return (
    <>
      <style>{`
    #self-serve-container {
        background: var(--dark-blue);
    }
    #self-serve-text-container {
        font-family: 'Ubuntu', san-serif;
        color: var(--dark-blue);
<<<<<<< HEAD
       
    }
    .service-text {
        font-family: 'Work Sans', sans-serif;
        color: #808080;
    }

    .accordion-item {
      {/* border: none; */}
    }
    
    .accordion {
      --bs-accordion-bg: none;
      border-left: 1px solid #808080;
      --bs-accordion-border-color: var(--dark-blue);
    }

    .accordion-button:focus {
      border-color: var(--dark-blue);
    }

    .accordion-button {
      --bs-accordion-active-bg: none;
      --bs-accordion-active-color: white;
      --bs-accordion-active-font-weight: bold;
      --bs-accordion-btn-color: rgba(150,150,150,.8);
      --bs-accordion-border-width: 0;
      font-weight: bold;
      transition: .3s;
    }
    .accordion [class*="collapsed"] {
      font-size: .9rem;
    }

    .accordion-button::after {
      --bs-accordion-btn-icon: url(${chevDown});
      --bs-accordion-btn-active-icon: url(${chevUp});
    }

=======
        border-left: 1px solid #808080;
    }
    .service-text {
        font-family: 'Work Sans', sans-serif;
        color: #e4e4e4;
    }

    .accordion-button {
      --bs-accordion-active-color: #fff;
      font-size: 1.1rem;
    }

    .accordion-button::after {
        --bs-accordion-btn-icon: url(${chevDown});
        --bs-accordion-btn-active-icon: url(${chevUp});
    }
>>>>>>> main
    
   
    `}</style>
      <section
        id="self-serve-container"
<<<<<<< HEAD
        className="container-fluid my-5 p-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row my-5 p-lg-5">
          <div className="container">
=======
        className="container-fluid py-lg-5 p-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row align-items-center my-5 p-lg-5">
          <div className="container p-0">
>>>>>>> main
            <img
              className="img-fluid"
              src={selfServ}
              alt="coffee cup and magazine"
              width="515"
              height="514"
            />
          </div>
<<<<<<< HEAD
          <div id="self-serve-text-container" className="container px-0">
            <div className="container p-lg-5 my-5">
              <div className="container d-flex align-items-center justify-content-center justify-content-lg-start px-0 mb-5">
                <h2 className="fw-bold h1">As a parent we offer you :</h2>
                
=======
          <div id="self-serve-text-container" className="container px-0 my-5">
            <div className="container p-lg-5">
              <div className="container d-flex align-items-center justify-content-center justify-content-lg-start px-0 mb-lg-5">
                <h2 className="fw-bold h2 text-white">
                  As a parent we offer{" "}
                  <span className="text-nowrap">you :</span>
                </h2>
>>>>>>> main
              </div>

              {/* STart */}
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
<<<<<<< HEAD
                      className="accordion-button"
=======
                      className="accordion-button ps-0"
>>>>>>> main
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Self service dashboard
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
<<<<<<< HEAD
                    <div className="accordion-body pt-0">
=======
                    <div className="accordion-body pt-0 ps-0">
>>>>>>> main
                      <p className="service-text text-lg-start">
                        Hackton is the leading online coding tutor for beginners
                        join us today to take a step further.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
<<<<<<< HEAD
                      className="accordion-button collapsed"
=======
                      className="accordion-button ps-0 collapsed"
>>>>>>> main
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Wide range of users
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
<<<<<<< HEAD
                    <div class="accordion-body pt-0">
=======
                    <div className="accordion-body pt-0 ps-0">
>>>>>>> main
                      <p className="service-text text-lg-start">
                        Hackton is the leading online coding tutor for beginners
                        join us today to take a step further.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
<<<<<<< HEAD
                      className="accordion-button collapsed"
=======
                      className="accordion-button ps-0 collapsed"
>>>>>>> main
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Quick setup
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
<<<<<<< HEAD
                    <div className="accordion-body pt-0">
=======
                    <div className="accordion-body pt-0 ps-0">
>>>>>>> main
                      <p className="service-text text-lg-start">
                        Hackton is the leading online coding tutor for beginners
                        join us today to take a step further.
                      </p>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
<<<<<<< HEAD
                        className="accordion-button collapsed"
=======
                        className="accordion-button ps-0 collapsed"
>>>>>>> main
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        24/7 customer support
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
<<<<<<< HEAD
                      <div className="accordion-body pt-0">
=======
                      <div className="accordion-body pt-0 ps-0">
>>>>>>> main
                        <p className="service-text text-lg-start">
                          Hackton is the leading online coding tutor for
                          beginners join us today to take a step further.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

<<<<<<< HEAD
export default ParentSelfService;
=======
export default ParentSelfService;
>>>>>>> main
