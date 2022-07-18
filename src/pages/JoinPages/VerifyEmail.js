import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-6.webp";
import padlock from "../../images/Registration/padlock.svg";
import AuthContext from "../../store/auth-context";
import SignUpContext from "../../store/signup-context";
const VerifyEmail = (props) => {
  console.log("verifyEmail rendered");
  const authCtx = useContext(AuthContext);
  const sighUPCtx = useContext(SignUpContext);
  const [verifyCode, setVerifyCode] = useState("");
  const verifyBody = {
    verify_token: authCtx.token,
    verfy_code: verifyCode,
  };

  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(verifyBody),
  };

  const verifySubmitHandler = (e) => {
    e.preventDefault();
    console.log("verify submit started");
    console.log("verify body being sent: " + JSON.stringify(verifyBody));
    fetch("https://tlancer.herokuapp.com/api/verify-account-code", settings)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("data recieved from verify code: " + JSON.stringify(data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <style>{`
      .email-accent {
        color: #0ebe6a;
      }
      
    `}</style>
      <JoinNav to="/" button="close" />
      <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
        <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
          <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
            <h2 className="account-heading mb-3">
              A verification code was sent to your email{" "}
              {sighUPCtx.data.email && (
                <span className="email-accent">
                  {props.sighUPCtx.data.email}
                </span>
              )}
            </h2>
            <h3 className="h1 display-5 fw-bold account-form-label">
              Enter Verification code
            </h3>
            <form>
              <div className="w-75 my-3 mt-md-4 p-3 registration-name d-flex flex-row align-items-center registration-input me-5">
                <img
                  className="me-3"
                  src={padlock}
                  alt="@"
                  width="24"
                  height="24"
                />
                <input
                  onChange={(e) => setVerifyCode(e.target.value)}
                  id="verification code"
                  className="d-block text-input"
                  type={"text"}
                  placeholder="Verification Code"
                />
              </div>
              <Link to={"/"}>
                <button
                  onClick={(e) => {
                    verifySubmitHandler(e);
                  }}
                  className="btn-registration btn btn-lg mt-5"
                >
                  Verify{" "}
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
            </form>
          </div>
          <div className="col col-md-5">
            <JoinRightWrapper src={imgSignup} alt="person using laptop" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifyEmail;
