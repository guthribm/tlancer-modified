import { createContext, useState } from "react";
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  userName: "",
  login: (token) => {},
  userLogIn: () => {},
  logout: () => {},
  setName: (name) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [userName, setUserName] = useState("");
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  // function for logging in
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  // function to set userLoggedIn to true
  const userLoginHandler = () => {
    setUserIsLoggedIn(true);
  };

  // function for logging out
  const logoutHandler = () => {
    console.log("logoutHandler Ran");
    setToken(null);
    setUserName("");
    setUserIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  // function for setting user first name value
  const userNameHandler = (name) => {
    setUserName(name);
  };

  // Creates value for holding token and logged in data
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userName: userName,
    login: loginHandler,
    userLogIn: userLoginHandler,
    logout: logoutHandler,
    setName: userNameHandler,
  };

  console.log("current token value: " + token);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
