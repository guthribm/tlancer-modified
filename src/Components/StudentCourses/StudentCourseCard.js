import { Link } from "react-router-dom";
import failed_icon from "../../images/Students/failed_icon.png";
import completed_icon from "../../images/Students/completed_icon.png";
import in_progress from "../../images/Students/in_progress.png"

const StudentCourseCard = (props) => {
  const bgColor =
    props.assesmentProgress === "Failed" ? "rgba(253, 78, 93, 0.15)" : "#fff";
  const txColor =
    props.score === "Retake" ? "var(--active-link)" : "#000000";
  const status = props.assesmentProgress

    let imageURL ="";
    if(props.assesmentProgress == "Failed"){
            imageURL = failed_icon;
    }
    if(props.assesmentProgress == "Completed"){
            imageURL = completed_icon;
    }
        
    if(props.assesmentProgress == "In Progress"){
            imageURL = in_progress;
    }

  


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
        
        
        .score-properties{
            color: #00274c;
            font-family: 'Ubuntu';
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

        .pending {
            color: #FFCB05;
        }

        .failed {
            color: #FD4E5D;
        }
        .left_margin1{
            margin-left: 140px;
        }
        
    `}</style>

      <div
        style={{ backgroundColor: bgColor }}
        className="card new-course-card col col-12 col-lg-3 mb-5 mx-4 px-0"
      >
        <img
          className="card-img-top img-fluid"
          src={props.src}
          alt={props.alt}
          width="350"
          height="223"
        />
        <div className="card-body p-lg-3 d-flex flex-column justify-content-between">
          <h5 className="course-title mb-3 text_color">{props.courseTitle}</h5>
          <div className="d-flex">
            
            <p className="instructor-name ">{props.instructorName}</p>
          </div>
          <div className="d-flex">
            {/* <img
            className="star img-fluid"
            src={starFull}
            width="20"
            height="20"
            alt="gold star"
          /> */}
            ⭐⭐⭐⭐⭐ 5/5
          </div>
          <div className="d-flex justify-content-between">
            <div
              className={
                props.assesmentProgress === "Failed"
                  ? "d-flex align-items-center failed"
                  : props.assesmentProgress === "Completed"
                  ? "d-flex align-items-center email-accent"
                  : "d-flex align-items-center pending"
              }
            >
              
                <div>
                <img src = {imageURL}
                     width="40"
                     height="40"
                />

                </div>
              
                    
                
              <p className="mb-0 ms-2 me-4">{props.assesmentProgress}</p>
              <p  
                style={{ color: txColor }}
                className="ms-5 mb-0  text_color " > 
                {props.score}
            </p>
            </div>

            <div className="d-flex align-items-center score-properties">
            </div>
            
          </div>
          
        </div>
        <div className="p-3">

        </div>
      </div>
    </>
  );
};

export default StudentCourseCard;