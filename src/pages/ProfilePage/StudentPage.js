import JoinNav from "../JoinPages/JoinNav";
const StudentPage = () => {
  return (
    <>
      <JoinNav to="/" button="close" />
      <div className="container-fluid p-5">
        <div className="container col m-5 p-5 text-center">
          <h1>
            Temporary <b className="bg-black text-white px-4">Student</b>{" "}
            Profile Profile Page
          </h1>
        </div>
      </div>
    </>
  );
};

export default StudentPage;