import parent_img from "../../../images/Parents/people.webp";
import JoinRightWrapper from "../../JoinPages/JoinRightWrapper";
import new1 from "../../../images/New Courses/new1.png";
import status_btn from "../../../images/Parents/status_btn.png"

const ChildProgress = () => {
  const submitHandler = (e) => {
    console.log("button clicked :)");
  };
  return (
    <>
      <style>{`
        #parent-learn-more-section {
            color: #00274C;
        }
        
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
          </div>
        </div>
      </section>
    </>
  );
};
export default ChildProgress;