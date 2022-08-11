import { Link } from "react-router-dom";
import failed_icon from "../../images/Students/failed_icon.png";
import completed_icon from "../../images/Students/completed_icon.png";
import in_progress from "../../images/Students/in_progress.png"

const TutorCard = (props) => {
  return (
    <>
      <style>{`
        .instructor-name {
            color: #9CA3AF;
            font-family: 'Work Sans', sans-serif;
        }
        .city-name{
            color: #808080;
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
        
        className="card new-course-card col col-12 col-lg-3 mb-5 mx-4 px-0 text-center"
      >
          
        <img
        //   className="card-img-top img-fluid"
          className=" img-fluid rounded mx-auto d-block mt-3"
          src={props.src}
          alt={props.alt}
          width="150"
          height="120"
        />
        <div className="card-body p-lg-3 d-flex flex-column justify-content-between">
          <h5 className="course-title mb-2 text_color instructor-name">{props.name}</h5>
          <p className="city-name">{props.location}</p>
          
          <div className="text-center">
            {/* <img
            className="star img-fluid"
            src={starFull}
            width="20"
            height="20"
            alt="gold star"
          /> */}
            ⭐⭐⭐⭐⭐ 4.5
          </div>

        </div>
      </div>

    </>
    
  );
};

export default TutorCard;