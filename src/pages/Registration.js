import Divider from "../Components/Divider";
import { Link } from "react-router-dom";
const Registration = () => {
  console.log("registration 1 rendered");
  return (
    <>
      <section className="container-fluid registration fade-in d-flex flex-column">
        <div className="col mt-5">
          <Link to={"/registration-two"}>Next</Link>
        </div>
        <div className="col text-center">
          <h2>Registration Page 1</h2>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default Registration;
