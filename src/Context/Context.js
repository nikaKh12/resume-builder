import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [validateNameSuccess, setValidateNameSuccess] = useState("");
  const [validateLastNameSuccess, setValidateLastNameSuccess] = useState("");
  const [validateMailSuccess, setValidateMailSuccess] = useState("");
  const [validatePhoneSuccess, setValidatePhoneSuccess] = useState("");

  const validateName = (event) => {
    let value = event.target.value;
    let regex = /^[\u10A0-\u10FF]+$/;
    if (value.length >= 2 && regex.test(value)) {
      setValidateNameSuccess(true);
      event.target.style.border = "1px solid green";
    } else {
      setValidateNameSuccess(false);
      event.target.style.border = "1px solid red";
    }
  };

  const validateLastName = (event) => {
    let value = event.target.value;
    let regex = /^[\u10A0-\u10FF]+$/;
    if (value.length >= 2 && regex.test(value)) {
      setValidateLastNameSuccess(true);
      event.target.style.border = "1px solid green";
    } else {
      setValidateLastNameSuccess(false);
      event.target.style.border = "1px solid red";
    }
  };

  const validateMail = (event) => {
    let value = event.target.value;
    let check = "@redberry.ge";
    if (check === value.slice(-12)) {
      setValidateMailSuccess(true);
      event.target.style.border = "1px solid green";
    } else {
      setValidateMailSuccess(false);
      event.target.style.border = "1px solid red";
    }
  };

  const validateNumber = (event) => {
    let value = event.target.value;
    let regex = /^\+[0-9]{12}$/;
    if (regex.test(value)) {
      setValidatePhoneSuccess(true);
      event.target.style.border = "1px solid green";
    } else {
      setValidatePhoneSuccess(false);
      event.target.style.border = "1px solid red";
    }
  };

  return (
    <Context.Provider
      value={{
        validateNameSuccess,
        setValidateNameSuccess,
        validateMailSuccess,
        setValidateMailSuccess,
        validatePhoneSuccess,
        setValidatePhoneSuccess,
        validateName,
        validateMail,
        validateNumber,
        validateLastName,
        validateLastNameSuccess,
        setValidateLastNameSuccess,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
