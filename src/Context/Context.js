import React, { useState, useEffect } from "react";
import { EXPERIENCE, EXPERIENCES_KEY } from "../constants";
import { getItemFromLocalStorage } from "../helper/Helper";
import uuid from "react-uuid";

const Context = React.createContext();

function ContextProvider({ children }) {
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
  const [experiences, setExperiences] = useState({
    [uuid()]: { ...EXPERIENCE },
  });

  useEffect(() => {
    const experiencesFromLocalStorage =
      getItemFromLocalStorage(EXPERIENCES_KEY);
    if (Object.keys(experiencesFromLocalStorage || {})?.length) {
      setExperiences(experiencesFromLocalStorage);
    }
  }, []);

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

  const validatePosition = (key, targetKey, value) => {
    const updatedExperiences = { ...experiences };
    if (value.length >= 2) {
      updatedExperiences[key][targetKey].isValid = true;
    } else {
      updatedExperiences[key][targetKey].isValid = false;
    }
    updatedExperiences[key][targetKey].touched = true;

    setExperiences(updatedExperiences);
  };

  const validateEmployer = (key, targetKey, value) => {
    const updatedExperiences = { ...experiences };
    if (value.length >= 2) {
      updatedExperiences[key][targetKey].isValid = true;
    } else {
      updatedExperiences[key][targetKey].isValid = false;
    }
    updatedExperiences[key][targetKey].touched = true;

    setExperiences(updatedExperiences);
  };

  const validateDuration = (key, targetKey, value) => {
    const updatedExperiences = { ...experiences };
    if (value !== "") {
      updatedExperiences[key][targetKey].isValid = true;
    } else {
      updatedExperiences[key][targetKey].isValid = false;
    }
    updatedExperiences[key][targetKey].touched = true;

    setExperiences(updatedExperiences);
  };

  const validateDescription = (key, targetKey, value) => {
    const updatedExperiences = { ...experiences };
    if (value !== "") {
      updatedExperiences[key][targetKey].isValid = true;
    } else {
      updatedExperiences[key][targetKey].isValid = false;
    }
    updatedExperiences[key][targetKey].touched = true;

    setExperiences(updatedExperiences);
  };

  const resetData = () => {
    localStorage.clear();
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
        experiences,
        setExperiences,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
