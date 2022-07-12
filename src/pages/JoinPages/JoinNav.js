import { Link } from "react-router-dom";
import logo from "../../images/logo.webp";
import closeBtn from "../../images/Registration/blueX.svg";
import backBtn from "../../images/Registration/arrow-left.svg";
const JoinNav = (props) => {
  return (
    <>
      <style>{`
      .registration-back-btn {
        font-family: 'Ubuntu', san-serif;
        font-weight: 500;
        font-size: 2rem;
        text-decoration: none;
        color: #00274c;
      }
      .registration-back-btn:hover {
        color: #00274c;
        opacity: 0.7;
      }
      #registration-back-btn {
        width: 25px;
        height: 25px;
      }
      
      
      .reg-logo{
        width: 75%;
        height: 75%;
      }

      @media (min-width: 768px) {
        .reg-logo{
          width: 25%;
          height: 25%;
        }
        #registration-back-btn {
        width: 70px;
        height: 70px;
      }
        
      }
      

    `}</style>
      <header className="container-fluid">
        <nav className="container navbar navbar-expand-lg navbar-light bg-white fixed-top w-100 d-flex align-items-center justify-content-between px-2">
          {props.button === "close" ? (
            <Link to={props.to}>
              <img
                className=""
                src={closeBtn}
                alt="close button"
                width={"70"}
                height={"70"}
              />
            </Link>
          ) : (
            <div className="registration-back-btn-container col">
              <Link className="registration-back-btn" to={props.to}>
                <img
                  id="registration-back-btn"
                  src={backBtn}
                  alt="back button"
                  width={"70"}
                  height={"70"}
                />{" "}
                Back
              </Link>
            </div>
          )}
          <Link className="col d-flex" to="/">
            <img
              className="reg-logo ms-auto"
              src={logo}
              alt="Tlancer"
              width={"374"}
              height={"90"}
            />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default JoinNav;
