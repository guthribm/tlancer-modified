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
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState("");
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  // function for logging in
  const loginHandler = (token) => {
    setToken(token);
  };

  const userLoginHandler = () => {
    setUserIsLoggedIn(true);
  };

  // function for logging out
  const logoutHandler = () => {
    setToken(null);
    setUserIsLoggedIn(false);
  };

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
