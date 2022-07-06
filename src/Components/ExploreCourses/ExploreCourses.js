import data, { data2 } from "./CoursesData";
const ExploreCourses = () => {
  const courses = data.map((course, index) => {
    return (
      <div
        className="course-container px-2 py-4 my-3 d-flex flex-column align-items-center"
        key={index}
      >
        <img src={course.image} alt={course.alt} width="60" height="60" />
        <p className="popular-course-title">{course.course}</p>
      </div>
    );
  });

  const courses2 = data2.map((course, index) => {
    console.log(course.course);
    return (
      <div
        className="course-container px-2 py-4 my-3 d-flex flex-column align-items-center"
        key={index}
      >
        <img src={course.image} alt={course.alt} width="60" height="60" />
        <p className="popular-course-title">{course.course}</p>
      </div>
    );
  });

  return (
    <>
      <style>{`
        .popular-course-title {
          font-family: 'Work Sans', sans-serif;
          font-weight: 500;
          margin-top: .5rem;
        }
        .course-container {
          width: 200px;
          border-radius: 20px;
          transition: .3s ease-in-out;
        }
        .course-container:hover {
          transform: scale(1.15);
          background: rgba(50,50,50,.05);
        }
        #explore-courses-heading {
          font-family: 'Ubuntu', san-serif;
        }
        `}</style>
      <section id="explore-courses-section" className="container-fluid">
        <div className="container pb-5 mb-5">
          <h2
            id="explore-courses-heading"
            className="h3 fw-bold py-5 text-center text-md-start"
          >
            Explore Course Library
          </h2>
          <div className="d-flex flex-column align-items-center flex-md-row justify-content-evenly">
            {courses}
          </div>
          <div className="d-flex flex-column align-items-center flex-md-row justify-content-evenly">
            {courses2}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreCourses;
