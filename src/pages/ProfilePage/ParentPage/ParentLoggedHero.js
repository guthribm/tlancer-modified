<<<<<<< HEAD
import parentHero from "../../../images/Parents/image1.png";
import charm_cross from "../../../images/Parents/charm_cross.png";
import notification from "../../../images/Parents/notification.png";
=======
import parentAvatar from "../../../images/Parents/parent-avatar.png";
// import charm_cross from "../../../images/Parents/charm_cross.png";
// import notification from "../../../images/Parents/notification.png";
>>>>>>> main
import JoinRightWrapper from "../../JoinPages/JoinRightWrapper";
const ParentLoggedHero = () => {
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
<<<<<<< HEAD
        .test{
            margin-top: 25px;
        }
=======
        
>>>>>>> main
        .test_button{
            color:var(--active-link);
            border:white;
            margin-right:1;
            font-weight: 600;
        }
<<<<<<< HEAD
        .test_left{
            margin-left: 11px;
        }
        .announcent-section{
            margin-top: 50px;
        }
        .para_left{
            margin-left: 40px;
        }
      `}</style>
      <section id="parent-section" className="container-fluid p-5">
        <div className="container d-flex flex-column-reverse flex-md-row align-items-center p-lg-5 mb-lg-5">
          <div className="col col-md-7 pe-md-5 text-center text-lg-start mt-lg-5">
            <h1 className="tutor-heading fw-500 display-4 test_left">
              Hi, Mr. Harry{" "}
              
            </h1>
            
            <h4 className ="test test_left">
                Complete your account setup today
            </h4>
            <button
              onClick={(e) => submitHandler(e)}
              className="btn test_button"
=======
        
      `}</style>
      <section id="parent-section" className="container-fluid p-5">
        <div className="container d-flex flex-column-reverse flex-md-row align-items-center p-lg-5">
          <div className="col col-md-7 pe-md-5 text-center text-lg-start mt-lg-5">
            <h1 className="tutor-heading fw-500 display-4 mb-5">
              Hi, Mr. Harry{" "}
            </h1>

            <h4 className="">Complete your account setup today</h4>
            <button
              onClick={(e) => submitHandler(e)}
              className="btn ps-0 email-accent"
>>>>>>> main
            >
              Complete account setup{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                className="bi bi-arrow-down ms-5"
                viewBox="0 0 17 17"
                style={{ transform: "rotate(-90deg)" }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </button>
<<<<<<< HEAD
             <div className="announcent-section d-flex test_left">
                <img src={notification} width="30" height="30"/>
                <p className="para_left">
                    No announcements have been posted yet. No announcementsNo announcements have been posted yet. No announcements
                </p>
                <img src={charm_cross} width="30" height="30"/>

            </div>
          </div>
        
          <div className="col col-md-5 ps-md-5">
            <JoinRightWrapper
              id="parent-hero-img"
              src={parentHero}
              alt="imgage-parent-hero"
            />
          </div>
             
        </div>
  
=======
          </div>

          <div className="col col-md-5 ps-md-5">
            <JoinRightWrapper
              id="parent-hero-img"
              src={parentAvatar}
              alt="imgage-parent-hero"
            />
          </div>
        </div>
>>>>>>> main
      </section>
    </>
  );
};
<<<<<<< HEAD
export default ParentLoggedHero;
=======
export default ParentLoggedHero;
>>>>>>> main
