import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-1.webp";
import SignUpContext from "../../store/signup-context";
import padlock from "../../images/Registration/padlock.svg";
import AuthContext from "../../store/auth-context";

const JoinEmail = (props) => {
  console.log("email rendered");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const signupCTX = useContext(SignUpContext);
  const authCTX = useContext(AuthContext);

  // if (pass.length > 1 && confirmPass.length > 1 && pass === confirmPass) {
  //   console.log("passwords match");
  // }

  function emailChecker(value) {
    return value.includes("@");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    signupCTX.actions.passwordHandler(confirmPass);
    signupCTX.actions.emailHandler(email);
    const emailValue = email;
    const passValue = confirmPass;
    const body = {
      email: emailValue,
      password: passValue,
    };
    const settings = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const url = "https://tlancer.herokuapp.com/api/signup-tmp";
    console.log("test fetch started with body of: " + JSON.stringify(body));
    fetch(url, settings)
      .then((res) => {
        if (res.ok) {
          console.log("test fetch POST successfully sent");
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;

              throw new Error(errorMessage);
            }
          });
        }
      })
      .then((data) => authCTX.login(data.token))
      .catch((err) => alert(err.message));
  };

  console.log("emailChecker: " + emailChecker(email));
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
              Type in your email and password to continue
            </h3>
            <form>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                id="join-email-input"
                className="registration-input registration-email d-block my-5 p-3 w-75"
                type={"email"}
                placeholder="Enter your email"
              />
              <div className="w-75 my-3 mt-md-4 p-3 registration-name d-flex flex-row align-items-center registration-input me-5">
                <img
                  className="me-3"
                  src={padlock}
                  alt="@"
                  width="24"
                  height="24"
                />
                <input
                  id="login-password"
                  required
                  onChange={(e) => setPass(e.target.value)}
                  className="d-block text-input"
                  type={"text"}
                  placeholder="Enter password"
                />
              </div>
              <div className="w-75 my-3 mt-md-4 p-3 registration-name d-flex flex-row align-items-center registration-input me-5">
                <img
                  className="me-3"
                  src={padlock}
                  alt="padlock icon"
                  width="24"
                  height="24"
                />
                <input
                  id="login-confirm-password"
                  className="d-block text-input"
                  type={"password"}
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmPass(e.target.value)}
                  required
                />
              </div>
              <h5 className="password-subtitle mb-5">
                Password must include, Letters, numbers, and symbols
              </h5>

              <Link to={"/verify-account"}>
                <button
                  onClick={(e) => submitHandler(e)}
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
