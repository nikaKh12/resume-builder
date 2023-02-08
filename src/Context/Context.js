import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [experienceCounter, setExperienceCounter] = useState(0);
  const [validateNameSuccess, setValidateNameSuccess] = useState("");
  const [validateLastNameSuccess, setValidateLastNameSuccess] = useState("");
  const [validatePictureSuccess, setValidatePictureSuccess] = useState("");
  const [validateMailSuccess, setValidateMailSuccess] = useState("");
  const [validatePhoneSuccess, setValidatePhoneSuccess] = useState("");
  const [validatePositionSuccess, setValidatePositionSuccess] = useState("");
  const [validateEmployerSuccess, setValidateEmployerSuccess] = useState("");
  const [validateDurationStartSuccess, setValidateDurationStartSuccess] =
    useState("");
  const [validateDurationEndSuccess, setValidateDurationEndSuccess] =
    useState("");
  const [validateDescriptionSuccess, setValidateDescriptionSuccess] =
    useState("");
  const [plus, setPlus] = useState("");
  const [privateInfoValidated, setPrivateInfoValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    photo: "",
    about: "",
    mail: "",
    phone: "",
    position: "",
    employer: "",
    durationStart: "",
    durationEnd: "",
    description: "",
  });

  const validateName = (event) => {
    let value = event.target.value;
    let regex = /^[\u10A0-\u10FF]+$/;
    setFormData({
      ...formData,
      firstName: value,
    });
    if (value.length >= 2 && regex.test(value)) {
      setValidateNameSuccess(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidateNameSuccess(false);
      event.target.style.border = "1px solid #f93b1d";
    }
    localStorage.setItem("firstName", value);
  };

  const validateLastName = (event) => {
    let value = event.target.value;
    let regex = /^[\u10A0-\u10FF]+$/;
    setFormData({
      ...formData,
      lastName: value,
    });
    if (value.length >= 2 && regex.test(value)) {
      setValidateLastNameSuccess(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidateLastNameSuccess(false);
      event.target.style.border = "1px solid #f93b1d";
    }
    localStorage.setItem("lastName", value);
  };

  const validateAbout = (event) => {
    let value = event.target.value;
    setFormData({
      ...formData,
      about: value,
    });
    if (value.length > 0) {
      event.target.style.border = "1px solid #98e37e";
    } else {
      event.target.style.border = "1px solid #bcbcbc";
    }
    localStorage.setItem("about", value);
  };

  const validateMail = (event) => {
    let value = event.target.value;
    let check = "@redberry.ge";
    setFormData({
      ...formData,
      mail: value,
    });
    if (check === value.slice(-12)) {
      setValidateMailSuccess(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidateMailSuccess(false);
      event.target.style.border = "1px solid #f93b1d";
    }
    localStorage.setItem("mail", value);
  };

  const validateNumber = (event) => {
    let value = event.target.value;
    let regex =
      /^\+995\d{3}\d{2}\d{2}\d{2}$|^\+995 \d{3} \d{2} \d{2} \d{2}$|^\+995 \d{3}\d{2}\d{2}\d{2}$/;
    setFormData({
      ...formData,
      phone: value,
    });
    if (value[0] !== "+") {
      setPlus("+");
      value = plus + value;
    } else {
      setPlus("");
    }
    if (regex.test(value)) {
      setValidatePhoneSuccess(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidatePhoneSuccess(false);
      event.target.style.border = "1px solid #f93b1d";
    }
    localStorage.setItem("phone", value);
  };

  const validatePosition = (event) => {
    let value = event.target.value;
    setFormData({
      ...formData,
      position: value,
    });
    if (value.length >= 2) {
      setValidatePositionSuccess(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidatePositionSuccess(false);
      event.target.style.border = "1px solid #f93b1d";
    }
    localStorage.setItem("position", value);
  };

  const validateEmployer = (event) => {
    let value = event.target.value;
    setFormData({
      ...formData,
      employer: value,
    });
    if (value.length >= 2) {
      setValidateEmployerSuccess(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidateEmployerSuccess(false);
      event.target.style.border = "1px solid #f93b1d";
    }
    localStorage.setItem("employer", value);
  };

  const validateDuration = (event) => {
    let value = event.target.value;
    if (event.target.className === "start" && value !== "") {
      setFormData({
        ...formData,
        durationStart: value,
      });
      setValidateDurationStartSuccess(true);
      event.target.style.border = "1px solid #98e37e";
      localStorage.setItem("durationStart", value);
    } else if (event.target.className === "end" && value !== "") {
      setFormData({
        ...formData,
        durationEnd: value,
      });
      setValidateDurationEndSuccess(true);
      event.target.style.border = "1px solid #98e37e";
      localStorage.setItem("durationEnd", value);
    } else {
      setValidateDurationStartSuccess(false);
      setValidateDurationEndSuccess(false);
    }
  };

  const validateDescription = (event) => {
    let value = event.target.value;
    setFormData({
      ...formData,
      description: value,
    });
    if (value !== "") {
      setValidateDescriptionSuccess(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidateDescriptionSuccess(false);
      event.target.style.border = "1px solid #8c8c8c";
    }
    localStorage.setItem("description", value);
  };

  const resetData = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("about");
    localStorage.removeItem("phone");
    localStorage.removeItem("mail");
    localStorage.removeItem("image");
    localStorage.removeItem("position");
    localStorage.removeItem("employer");
    localStorage.removeItem("durationStart");
    localStorage.removeItem("durationEnd");
    localStorage.removeItem("description");
    setValidateNameSuccess("");
    setValidateLastNameSuccess("");
    setValidateMailSuccess("");
    setValidatePhoneSuccess("");
    setValidatePositionSuccess("");
    setValidateEmployerSuccess("");
    setValidateDurationStartSuccess("");
    setValidateDurationEndSuccess("");
    setValidateDescriptionSuccess("");
    setPrivateInfoValidated(false);
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
        validateAbout,
        validateLastNameSuccess,
        setValidateLastNameSuccess,
        formData,
        setFormData,
        resetData,
        validatePictureSuccess,
        setValidatePictureSuccess,
        privateInfoValidated,
        setPrivateInfoValidated,
        validatePosition,
        validatePositionSuccess,
        setValidatePositionSuccess,
        validateEmployer,
        validateEmployerSuccess,
        setValidateEmployerSuccess,
        setValidateMailSuccess,
        validateDuration,
        validateDurationStartSuccess,
        setValidateDurationStartSuccess,
        validateDurationEndSuccess,
        setValidateDurationEndSuccess,
        validateDescription,
        validateDescriptionSuccess,
        setValidateDescriptionSuccess,
        setValidateMailSuccess,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
