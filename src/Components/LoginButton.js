import { useAuth0 } from "@auth0/auth0-react";
import google from "../images/Registration/google.png";
const LoginButton = (props) => {
  const { isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <>
        <style>{`
          .btn-google {
            border: 1px solid #d1d5db;
            border-radius: 10px;
            font-weight: 500;
            font-family: 'Ubuntu', san-serif;
            color: var(--dark-blue);
          }
        `}</style>
        <button
          className="btn btn-lg btn-google"
          onClick={() => console.log("button Clicked")}
        >
          <img className="img-fluid me-3" src={google} alt="google icon" />
          Continue with Google
        </button>
      </>
    )
  );
};

export default LoginButton;
