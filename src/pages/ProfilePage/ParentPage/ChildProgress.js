import parent_img from "../../../images/Parents/people.webp";
import JoinRightWrapper from "../../JoinPages/JoinRightWrapper";
<<<<<<< HEAD
import new1 from "../../../images/New Courses/new1.png";
import status_btn from "../../../images/Parents/status_btn.png"

const ChildProgress = () => {
=======
const ParentLearnMore = () => {
>>>>>>> main
  const submitHandler = (e) => {
    console.log("button clicked :)");
  };
  return (
    <>
      <style>{`
        #parent-learn-more-section {
            color: #00274C;
        }
<<<<<<< HEAD
        
        .child-course-detail{
            font-family: 'Work Sans', san-serif;
            color:var(--grey-5);
        }
        .child-progress{
          color:var(--active-link);
          margin-left:20px;
        }
        .completed-percent{
          
          margin-left:200px;
          color:var(--grey-5);
          font-family: 'Work Sans', san-serif;
            
        }
      `}</style>
      <section id="parent-learn-more-section" className="container-fluid">
        <div className="container d-flex flex-column flex-lg-row align-items-center pt-lg-0 mb-5">
          <div className="col col-lg-5 pe-lg-5">
            <JoinRightWrapper id="people-img" src={new1} alt="people" />
          </div>
          <div>
            <h5 className="child-course-detail" >
              Adam's currently taking
            </h5>
            <h4 className="w-75">
              Professional Product Design Certificate Course
            </h4>
            <div className="d-flex mt-3">
            <img src = {status_btn} alt="staus" width="40"height="40"/>
            
              <h6 className="d-flex mt-2 child-progress">
                In Progress
              </h6>
              <h6 className="mt-2 completed-percent">
                26%
              </h6>
              
            </div>
=======
        #parent-learn-more-section p {
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
        .btn-green{
             background: var(--active-link);
             color:white;
             border-color:var(--active-link);
        }
      `}</style>
      <section id="parent-learn-more-section" className="container-fluid">
        <div className="container d-flex flex-column flex-lg-row align-items-center py-5 pt-lg-0 mb-5">
          <div className="col col-lg-5 pe-lg-5">
            <JoinRightWrapper id="people-img" src={parent_img} alt="people" />
          </div>
          <div className="col col-lg-7 pe-lg-5 text-center text-lg-start mt-5 ">
            <h2 className="tutor-heading fw-500 display-4">
              We connect students with the best tutors across the world to help
              them learn.
            </h2>
            <p className="my-4 h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing
              elit consectetur Lorem ipsum dolor sit amet, consectetur
              adipiscing elit elit consectetur ipsum dolor sit amet, consectetur
              adipiscing elit adipiscing elit consectetur
            </p>
            <button
              onClick={(e) => submitHandler(e)}
              className="btn-get-started btn btn-lg mt-5 mx-auto ms-lg-0 text-nowrap"
            >
              Learn more about us{" "}
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
>>>>>>> main
          </div>
        </div>
      </section>
    </>
  );
};
<<<<<<< HEAD
export default ChildProgress;
=======
export default ParentLearnMore;
>>>>>>> main
