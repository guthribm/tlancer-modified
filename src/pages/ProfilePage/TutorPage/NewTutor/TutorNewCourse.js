import { Link } from "react-router-dom";
import pencil from "../../../../images/Tutors/pencil.png";
const TutorNewCourse = () => {
  return (
    <>
      <style>{`
        #tutor-new-course-section {
          margin-top: 8rem;
        }
        
        .course-description-input {
          border: 1px solid rgba(100,100,100,0.3);
          border-radius: 20px;          
        }
      `}</style>
      <section id="tutor-new-course-section" className="container-fluid p-5">
        <div className="container">
          <form>
            <div className="form-row">
              <h3 className="account-form-label fw-bold mb-4 h4">Student</h3>
              <div className="d-flex">
                <div className="form-group me-5">
                  <select
                    id="grouped-students"
                    className="form-select new-course-label"
                  >
                    <option>Grouped Student</option>
                    <option>Single Student</option>
                  </select>
                  <label
                    className="my-2 new-course-label"
                    for="grouped-students"
                  >
                    Select student type ?
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control text-end"
                    id="number-of-students"
                    placeholder="| Student"
                  />
                  <label
                    className="my-2 new-course-label"
                    for="number-of-students"
                  >
                    Number of students
                  </label>
                </div>
              </div>

              <div className="p-3 registration-name d-flex flex-row align-items-center registration-input mt-4 w-50">
                <img
                  className="me-3"
                  src={pencil}
                  alt="person icon"
                  width="24"
                  height="24"
                />
                <input
                  id="new-course-title"
                  className="d-block text-input"
                  type={"text"}
                  placeholder="Course title"
                />
              </div>
              <label
                className="mt-2 mb-5 new-course-label"
                for="new-course-title"
              >
                Input course title, keep it simple.
              </label>

              <div className="form-group col-md-6 course-description-input p-3">
                <textarea
                  className="border-0 new-course-label"
                  id="course-description"
                  name="course-description"
                  rows="5"
                  cols="50"
                >
                  Course description
                </textarea>
              </div>
            </div>

            <div className="form-row mt-5">
              <h3 className="account-form-label fw-bold mb-3 h4">
                Course categories
              </h3>
              <p className="new-course-label h5">
                Select from our list of course categories for your new course
              </p>

              <div className="form-group">
                <select
                  id="course-category"
                  defaultValue={"DEFAULT"}
                  className="form-select new-course-label p-3 px-4 course-description-input w-50"
                >
                  <option value="DEFAULT" disabled>
                    Choose course category
                  </option>
                  <option value="1">Web Development</option>
                  <option value="2">Video Games (General)</option>
                  <option value="3">PC Games</option>
                  <option value="4">Console Games</option>
                  <option value="5">Movie Trivia</option>
                </select>
                <label className="visually-hidden" for="course-category">
                  Choose Course Category
                </label>
              </div>

              <div className="form-row mt-5">
                <h3 className="account-form-label fw-bold mb-3 h4">
                  Class type
                </h3>
                <div className="form-group">
                  <select
                    id="class-type"
                    defaultValue={"1"}
                    className="form-select new-course-label p-3 px-4 course-description-input w-50"
                  >
                    <option value="1">Online</option>
                    <option value="2">Offline</option>
                  </select>
                  <label className="visually-hidden" for="class-type">
                    class type
                  </label>
                </div>
                <Link to={"/tutor/course-syllabus"}>
                  <button className="btn-registration btn btn-lg mt-5">
                    Next{" "}
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
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default TutorNewCourse;
