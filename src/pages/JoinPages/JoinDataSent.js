import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-7.webp";
const JoinDataSent = (props) => {
  console.log("data sent rendered");

  return (
    <>
      <style>{`
      
      
    `}</style>
      <JoinNav to="/" button="close" />
      <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
        <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
          <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
            <h2 className="account-heading mb-3">
              An email will be sent shortly with your verification code and
              confirmation link
            </h2>
            <h3 className="h1 display-5 fw-bold account-form-label">
              Your information has been submitted successfully!
            </h3>
          </div>
          <div className="col col-md-5">
            <JoinRightWrapper src={imgSignup} alt="person using laptop" />
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinDataSent;
