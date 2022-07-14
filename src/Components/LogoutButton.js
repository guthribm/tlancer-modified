import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <style>{``}</style>
        <button
          className="btn btn-nav btn-lg join mx-auto ms-lg-4"
          onClick={() => logout()}
        >
          Log Out
        </button>
      </>
    )
  );
};

export default LogoutButton;
