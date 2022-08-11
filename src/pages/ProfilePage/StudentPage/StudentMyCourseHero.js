import parentAvatar from "../../../images/Parents/parent-avatar.png";
import JoinRightWrapper from "../../JoinPages/JoinRightWrapper";
import charm_cross from "../../../images/Parents/charm_cross.png";
import notification from "../../../images/Parents/notification.png";
import { Link } from "react-router-dom";
import arrow from "../../../images/Students/arrow.png";
const StudentMyCourseHero = () => {
  const submitHandler = (e) => {
    console.log("button clicked :)");
  };
  return (
    <>
      <style>{`
        #parent-section {
            color: #00274C;
        }
        #parent-section p {
            font-family: 'Work Sans', san-serif;
            font-weight: 400;
            color: #6C757D;
        }
        .tutor-heading {
            font-family: 'Ubuntu', san-serif;
            font-weight: 500;
        }
        .tutor-accent {
            font-family: 'Work Sans', san-serif;
            font-weight: bold;
        }
        .btn-green{
             background: var(--active-link);
             color:white;
             border-color:var(--active-link);
        }
        .clorOfTextInPara{
            font-family: 'Work Sans', san-serif;
            
            color: blue;
        }
        
        .test_button{
            color:var(--active-link);
            border:white;
            margin-right:1;
            font-weight: 600;
        }
        .left_margin{
            margin-left:30px;
        }
        .div_left_margin{
             margin-left:540px;
        }
        .arrow_size{
            width: 30px;
            height:15px;
        }
        .new-margin-left{
            margin-left:30px;
        }
        
      `}</style>
      <section id="parent-section" className="container-fluid p-5  mt-1">
        <div className="container   align-items-center p-lg-5">
         <div className=" d-flex div_left_margin">
                 <img src={notification} width="30" height="30" className="new-margin-left"/>
                 <p className="para_left w-75 left_margin ">
                     No announcements have been posted yet. No announcementsNo announcements have been posted yet. No announcements
                 </p>
                 <img src={charm_cross} width="20" height="20" className="new-margin-left"/>

          </div>
            <div className="d-flex new-margin-right">
                
                  <Link
                        to={"/student"}
                        className="nav-link text-nowrap "
                        aria-current="page"
                        style={{ color: '#808080'}}
                  >
                  Home
                  </Link>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="#808080" 
                        class="bi bi-arrow-right left_margin mt-1" 
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                   
                    <Link
                        to={"/student"}
                        className="nav-link text-nowrap left_margin"
                        aria-current="page"
                    >
                        MyCourses
                  </Link>         
            </div>
        </div>
      </section>
    </>
  );
};
export default StudentMyCourseHero;
