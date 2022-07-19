import { useState, createContext } from "react";
const SignUpContext = createContext();

export const SignUpContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const emailHandler = (email) => {
    setEmail(email);
  };

  const [password, setPassword] = useState("");
  const passwordHandler = (pass) => {
    setPassword(pass);
  };
  const signUpContextValue = {
    data: {
      email: email,
      password: password,
    },
    actions: {
      emailHandler: emailHandler,
      passwordHandler: passwordHandler,
    },
  };
  console.log(
    "SignUpContext data values contains: " +
      JSON.stringify(signUpContextValue.data)
  );
  return (
    <SignUpContext.Provider value={signUpContextValue}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
