import StudentCourseCard from "./StudentCourseCard";
import new1 from "../../images/New Courses/new1.png";
import new2 from "../../images/New Courses/new2.png";
import new3 from "../../images/New Courses/new3.png";
import new4 from "../../images/New Courses/new4.png";



const StudentCourses = (props) => {
  return (
    <>
      <style>{`
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
    @media (max-width: 768px) 
      .new-courses-btn {
        display: none;
      }
    }
    `}</style>
      <section id="new-courses-section" className="container-fluid">
        <div className="container">
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
            <h2 className="h4 fw-bold my-5">{props.heading}</h2>
          </div>
          <div className="row justify-content-center">
            <StudentCourseCard
              src={new1}
              courseTitle="User Research Pro-Level Course for beginner"
              assesmentProgress="In Progress"
              score="26%"
              assesmentAction="Complete Assesment"
            />
            <StudentCourseCard
              src={new2}
              courseTitle="Senior level General chemistry Course"
              assesmentProgress="Completed"
              score="26%"
              assesmentAction="View Assesment"
            />

            <StudentCourseCard
              src={new3}
              courseTitle="Geometry from beginner to sernior level"
              assesmentProgress="Completed"
              score="26%"
              assesmentAction="View Assesment"
            />

            <StudentCourseCard
              src={new4}
              courseTitle="Geometry from beginner to sernior level"
              assesmentProgress="Completed"
              score="Retake"
              assesmentAction="View Assesment"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default StudentCourses;