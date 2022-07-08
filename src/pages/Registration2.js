import { Link } from "react-router-dom";
import Divider from "../Components/Divider";
const RegistrationTwo = () => {
  console.log("registration 2 rendered");
  return (
    <>
      <section className="container-fluid registration fade-in d-flex flex-column">
        <div className="col mt-5">
          <Link className="mx-4" to={"/registration"}>
            Prev
          </Link>
          <Link className="mx-4" to={"/registration-three"}>
            Next
          </Link>
        </div>
        <div className="col text-center">
          <h2>Registration Page 2</h2>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default RegistrationTwo;
