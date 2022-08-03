// import starFull from "../../images/star_full.png";
// import starEmpty from "../../images/star_empty.png";

import { Link } from "react-router-dom";

const AssesmentCourseCard = (props) => {
  return (
    <>
      <style>{`
        .instructor-name {
            color: #9CA3AF;
            font-family: 'Work Sans', sans-serif;
        }
        .course-title, .new {
            font-family: 'Ubuntu', san-serif;
            font-weight: 500;
        }
        .card-img-top {
            border-radius: 20px 20px 0px 0px;
        }
        .new-course-card {
            max-width: 275px;
            border: none;
            border-radius: 20px;
            box-shadow: 0px 0px 40px rgba(100,100,100,0.15);
        }
        .course-prices {
            font-family: 'Ubuntu', san-serif;
        }
        .course-price-before {
            color: #9CA3AF;
            text-decoration: line-through;
        }
        .new {
            background: #0EBE6A;
            color: #fff;
            display: inline-block;
            border-radius: 6px;
        }
        .spacing{
            padding-left: 25px;
            
        }
        .spacing-right{
            padding-right: 15px;
            
        }
        .spacing-left{
            padding-right: 5px;
            
        }
        .score-properties{
            color: #00274c;
            font-family: 'Ubuntu';
            san-serif;

        }
        
        .text_color{
            color: #00274c;
        }
        .btn-get-started_new {
            background: #fff;;
            color: var(--dark-blue);
            font-family: 'Ubuntu', san-serif;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 275px;
            border: 1px solid var(--dark-blue);
        }
    `}</style>

      <div className="card new-course-card col col-12 col-lg-3 mb-5 mx-4 px-0">
        <img
          className="card-img-top img-fluid"
          src={props.src}
          alt={props.alt}
          width="350"
          height="223"
        />
        <div className="card-body p-lg-4">
          
          <h5 className="course-title mb-3 text_color">{props.courseTitle}</h5>
          <div className="d-flex">
            <img
              className="instructor-img me-2"
              src={props.instructorImg}
              alt="instructor"
              width={"30"}
              height={"30"}
            />
            <p className="instructor-name ">{props.instructorName}</p>
          </div>
          
          

          <div className="d-flex spacing-left">
              <div className="d-flex spacing-left">
                    <img
                    className="instructor-img me-2"
                    src={props.assesmentCompletedIcon}
                    alt="instructor"
                    width={"20"}
                    height={"20"}
                    
                    />
                    <p className="instructor-name spacing-right">{props.assesmentProgress}</p>
              </div>
            
            
               
              <div className="d-flex spacing-left">
                  <img
                    className="score-img me-2"
                    src={props.assesmentScoreImg}
                    alt="score"
                    width={"20"}
                    height={"20"}
                    

                 />
                 <p className="Assesment text_color spacing-left">{props.assesmentVal}</p>               
                 <p className="Assesment_numerator  text_color ">{props.score_numerator}</p>
                 <p className="Assesment_numerator  text_color">{props.score_divsion}</p>
                 <p className="Assesment_denominator  text_color">{props.score_denomenator}</p>

            </div>
                 

          </div>
        </div>
        <div>
              <Link
              to={"/student/assesment"}
              className="btn-get-started_new btn"
            >
              
              {props.assesmentAction}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-down ms-5"
                viewBox="0 0 20 20"
                style={{ transform: "rotate(-90deg)" }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </Link>
        </div>
      </div>
    </>
  );
};

export default AssesmentCourseCard;
