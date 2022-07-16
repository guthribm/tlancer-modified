import { Link } from "react-router-dom";
import { useState } from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-1.webp";
const JoinEmail = (props) => {
  console.log("email rendered");
  const [emailValue, setEmailValue] = useState("");

  function emailChecker(value) {
    return value.includes("@");
  }

  console.log("emailChecker: " + emailChecker(emailValue));
  return (
    <>
      <style>{`
      
      .registration-email {
        border-radius: 12px;
        border: 1px solid #d1d5db;
      }
      
      
    `}</style>
      <JoinNav joinData={props.joinData} to="/" button="close" />
      <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
        <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
          <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
            <h2 className="account-heading mb-3">Continue to registration</h2>
            <h3 className="h1 display-5 fw-bold account-form-label">
              Type in your email to continue
            </h3>
            <form>
              <input
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
                id="join-email-input"
                className="registration-input registration-email d-block my-5 p-3 w-75"
                type={"email"}
                placeholder="Enter your email"
              />
              {!emailChecker(emailValue) ? (
                <button disabled className="btn-registration btn btn-lg">
                  Continue{" "}
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
              ) : (
                <Link to={"/names"}>
                  <button
                    onClick={() => {
                      props.setEmail(
                        (prev) =>
                          (prev =
                            document.getElementById("join-email-input").value)
                      );
                    }}
                    className="btn-registration btn btn-lg"
                  >
                    Continue{" "}
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
              )}
            </form>
          </div>
          <div className="col col-md-5">
            <JoinRightWrapper
              id="email-img"
              src={imgSignup}
              alt="person using laptop"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinEmail;
