import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <style>{`.userImg {border-radius: 20px;}`}</style>
        <div>{JSON.stringify(user, null, 2)}</div>
        <img
          className="userImg"
          src={user.picture}
          width="150"
          height="150"
          alt={user.nickname}
        />
        <h2>{user.nickname}</h2>
        <h3>{user.email}</h3>
      </>
    )
  );
};

export default Profile;
