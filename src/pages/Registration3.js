import { Link } from "react-router-dom";
import Divider from "../Components/Divider";
const RegistrationThree = () => {
  console.log("registration 3 rendered");
  return (
    <>
      <section className="container-fluid registration fade-in d-flex flex-column">
        <div className="col mt-5">
          <Link className="mx-4" to={"/registration-two"}>
            Prev
          </Link>
          <Link className="mx-4" to={"/registration"}>
            Next
          </Link>
        </div>
        <div className="col text-center">
          <h2>Registration Page 3</h2>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default RegistrationThree;
