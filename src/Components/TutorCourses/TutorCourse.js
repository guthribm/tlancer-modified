import TutorCard from "./TutorCard";
import avtar1 from "../../images/Tutors/avatar-1.png";
import avtar2 from "../../images/Tutors/avatar-2.png";
import avtar3 from "../../images/Tutors/avatar-3.png";
import avtar4 from "../../images/Tutors/avatar-4.png";



const TutorCourse = (props) => {
  return (
    <>
      <style>{`
      .tutor{
          color:var(--dark-blue);
          margin-left:35px;
          font-family: 'Ubuntu', san-serif;
      }
      #new-courses-section {
        background: ${props.bgColor};
      }
    #new-courses-section h2 {
        font-family: 'Ubuntu', san-serif;
    }
    .new-courses-btn {
        background: none;
        border: none;
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
    }
    #new-courses-arrow {
        transform: rotate(235deg);
        margin-left: 0.25rem;
    }
    @media (max-width: 768px) {
      .new-courses-btn {
        display: none;
      }
    }
    `}</style>
      <section id="new-courses-section" className="container-fluid p-lg-5">
        <div className="container">
         
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
            <h2 className="h4 fw-bold my-5">{props.heading}</h2>
          </div>
          <h3 className="tutor mb-5">
             Your Tutors
         </h3>
          <div className="row justify-content-center">
            <TutorCard
              src={avtar1}
              alt="tutor-img"
              name="Marloon Flick"
              location="New York"
              
            />
            <TutorCard
              src={avtar2}
              alt="tutor-img"
              name="Cooper, Kristin"
              location="Brooklyn"
              
            />

            <TutorCard
              src={avtar3}
              alt="tutor-img"
              name="Miles, Esther"
              location="Tibilis"
              
            />

            <TutorCard
              src={avtar4}
              alt="tutor-img"
              name="Geoffrey Mott"
              location="21 Pentrefelin, LL68 9PE"
              
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default TutorCourse;