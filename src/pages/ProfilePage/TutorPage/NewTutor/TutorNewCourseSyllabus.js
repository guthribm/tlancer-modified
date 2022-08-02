import { NewCourseProgress } from "../../../../Components/NewCourseProgress";
const TutorNewCourseSyllabus = () => {
  return (
    <>
      <style>{`
        #tutor-new-syllabus-section {
          margin-top: 8rem;
        }

        .course-description-input {
          border: 1px solid rgba(100,100,100,0.3);
          border-radius: 20px;          
        }

        #course-description {
          border-color: rgba(100,100,100,0.3);
        }

        .current {
          color: var(--product-dark-blue);
        }

        
      `}</style>
      <section
        id="tutor-new-syllabus-section"
        className="container-fluid p-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row">
          <NewCourseProgress current={2} />
          <div>
            <h1>Syllabus goes here.</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default TutorNewCourseSyllabus;
