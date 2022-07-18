import { useState, createContext } from "react";
const SignUpContext = createContext();

export const SignUpContextProvider = (props) => {
  const [accountType, setAccountType] = useState("");
  const accountHandler = (account) => {
    setAccountType(account);
  };
  const [email, setEmail] = useState("");
  const emailHandler = (email) => {
    setEmail(email);
  };
  const [firstName, setFirstName] = useState("");
  const firstNameHandler = (fName) => {
    setFirstName(fName);
  };
  const [lastName, setLastName] = useState("");
  const lastNameHandler = (lName) => {
    setLastName(lName);
  };
  const [date, setDate] = useState("");
  const dateHandler = (dob) => {
    setDate(dob);
  };
  const [location, setLocation] = useState("");
  const locationHandler = (loc) => {
    setLocation(loc);
  };
  const [password, setPassword] = useState("");
  const passwordHandler = (pass) => {
    setPassword(pass);
  };
  const signUpContextValue = {
    data: {
      type: accountType,
      email: email,
      first_name: firstName,
      last_name: lastName,
      dob: date,
      location: location,
      password: password,
    },
    actions: {
      accountHandler: accountHandler,
      emailHandler: emailHandler,
      firstNameHandler: firstNameHandler,
      lastNameHandler: lastNameHandler,
      dateHandler: dateHandler,
      locationHandler: locationHandler,
      passwordHandler: passwordHandler,
    },
  };
  console.log(
    "signUpContextData main contains: " +
      JSON.stringify(signUpContextValue.data)
  );
  return (
    <SignUpContext.Provider value={signUpContextValue}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
