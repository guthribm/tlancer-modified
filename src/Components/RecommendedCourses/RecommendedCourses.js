const RecommendedCourses = () => {
  return (
    <>
      <style>{`
    #recommended-courses-section h2 {
        font-family: 'Ubuntu', san-serif;
    }

    .recommended-courses-btn {
        background: none;
        border: none;
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
    }

    #recommended-courses-arrow {
        transform: rotate(235deg);
        margin-left: 0.25rem;
    }

    @media (max-width: 768px) {
      .recommended-courses-btn {
        display: none;
      }
    }
    `}</style>
      <section
        id="recommended-courses-section"
        className="container-fluid my-5"
      >
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between mt-5 my-md-5">
          <h2 className="h4 fw-bold pb-4">Recommended</h2>
          <button className="recommended-courses-btn h5">
            See more courses
            <svg
              id="recommended-courses-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down ms-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default RecommendedCourses;
