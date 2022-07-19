import JoinNav from "../JoinPages/JoinNav";
const ProfilePage = () => {
  return (
    <>
      <JoinNav to="/phone-number" button="back" />
      <div className="container-fluid p-5">
        <div className="container col m-5 p-5 text-center">
          <h1>Temporary User Profile ProfilePage</h1>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
