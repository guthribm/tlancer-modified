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

  const [account, setAccount] = useState("");
  const accountHandler = (acc) => {
    setAccount(acc);
  };

  const [date, setDate] = useState("");
  const dateHandler = (dob) => {
    setDate(dob);
  };

  const [location, setLocation] = useState("");
  const locationHandler = (loc) => {
    setLocation(loc);
  };

  const [phone, setPhone] = useState("");
  const phoneHandler = (num) => {
    setPhone(num);
  };
  const signUpContextValue = {
    data: {
      email: email,
      password: password,
      account: account,
      date: date,
      location: location,
      phone: phone,
    },
    actions: {
      emailHandler: emailHandler,
      passwordHandler: passwordHandler,
      accountHandler: accountHandler,
      dateHandler: dateHandler,
      locationHandler: locationHandler,
      phoneHandler: phoneHandler,
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
