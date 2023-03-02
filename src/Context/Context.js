import React, { useState, useEffect } from "react";
import {
  EXPERIENCE,
  EXPERIENCES_KEY,
  EDUCATION,
  EDUCATION_KEY,
} from "../constants";
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
  const [educations, setEducations] = useState({
    [uuid()]: { ...EDUCATION },
  });
  const [degreeList, setDegreeList] = useState([]);
  const [finalData, setFinalData] = useState({});

  useEffect(() => {
    const experiencesFromLocalStorage =
      getItemFromLocalStorage(EXPERIENCES_KEY);
    if (Object.keys(experiencesFromLocalStorage || {})?.length) {
      setExperiences(experiencesFromLocalStorage);
    }
    const educationsFromLocalStorage = getItemFromLocalStorage(EDUCATION_KEY);
    if (Object.keys(educationsFromLocalStorage || {})?.length) {
      setEducations(educationsFromLocalStorage);
    }
  }, []);
  const [dataObj, setDataObj] = useState({
    name: formData.firstName,
    surname: formData.lastName,
    email: formData.mail,
    phone_number: formData.phone,
    experiences: experiences,
    educations: educations,
    image: formData.photo,
    about_me: formData.about,
  });
  const getRequestData = () => {
    return {
      name: formData.firstName || localStorage.getItem("firstName"),
      surname: formData.lastName || localStorage.getItem("lastName"),
      email: formData.mail || localStorage.getItem("mail"),
      phone_number: formData.phone || localStorage.getItem("phone"),
      experiences: experiences || getItemFromLocalStorage("experiences"),
      educations: educations || getItemFromLocalStorage("educations"),
      image: formData.photo || localStorage.getItem("image"),
      about_me: formData.about || localStorage.getItem("about"),
    };
  };

  const validateName = (event) => {
    let value = event.target.value.replace(/\s+/g, "");
    let regex = /^[\u10A0-\u10FF]+$/;
    setFormData({
      ...formData,
      firstName: value,
    });
    setDataObj({
      ...dataObj,
      name: value,
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
    let value = event.target.value.replace(/\s+/g, "");
    let regex = /^[\u10A0-\u10FF]+$/;
    setFormData({
      ...formData,
      lastName: value,
    });
    setDataObj({
      ...dataObj,
      surname: value,
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
    setDataObj({
      ...dataObj,
      about_me: value,
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
    setDataObj({
      ...dataObj,
      name: value,
    });
    setDataObj({
      ...dataObj,
      email: value,
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
    setDataObj({
      ...dataObj,
      phone_number: value,
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

  const validateInstitute = (key, targetKey, value) => {
    const updatedEducations = { ...educations };
    if (value.length >= 2) {
      updatedEducations[key][targetKey].isValid = true;
    } else {
      updatedEducations[key][targetKey].isValid = false;
    }
    updatedEducations[key][targetKey].touched = true;

    setEducations(updatedEducations);
  };

  const validateDegree = (key, targetKey, value) => {
    const updatedEducations = { ...educations };
    if (value !== "") {
      updatedEducations[key][targetKey].isValid = true;
    } else {
      updatedEducations[key][targetKey].isValid = false;
    }
    updatedEducations[key][targetKey].touched = true;

    setEducations(updatedEducations);
  };

  const validateDueDate = (key, targetKey, value) => {
    const updatedEducations = { ...educations };
    if (value !== "") {
      updatedEducations[key][targetKey].isValid = true;
    } else {
      updatedEducations[key][targetKey].isValid = false;
    }
    updatedEducations[key][targetKey].touched = true;

    setEducations(updatedEducations);
  };

  const validateEducationDescription = (key, targetKey, value) => {
    const updatedEducations = { ...educations };
    if (value !== "") {
      updatedEducations[key][targetKey].isValid = true;
    } else {
      updatedEducations[key][targetKey].isValid = false;
    }
    updatedEducations[key][targetKey].touched = true;

    setEducations(updatedEducations);
  };

  const resetData = () => {
    localStorage.clear();
    Object.values(experiences).map((experience) => {
      experience.position.value = "";
      experience.position.isValid = false;
      experience.position.touched = false;
      experience.employer.value = "";
      experience.employer.isValid = false;
      experience.employer.touched = false;
      experience.startDate.value = "";
      experience.startDate.isValid = false;
      experience.startDate.touched = false;
      experience.endDate.value = "";
      experience.endDate.isValid = false;
      experience.endDate.touched = false;
      experience.description.value = "";
      experience.description.isValid = false;
      experience.description.touched = false;
    });
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
    localStorage.clear();
    Object.values(educations).map((education) => {
      education.institute.value = "";
      education.institute.isValid = false;
      education.institute.touched = false;
      education.degree.value = "";
      education.degree.isValid = false;
      education.degree.touched = false;
      education.due_date.value = "";
      education.due_date.isValid = false;
      education.due_date.touched = false;
      education.description.value = "";
      education.description.isValid = false;
      education.description.touched = false;
    });
    setTimeout(() => {
      window.location.reload(true);
    }, 100);
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
        educations,
        setEducations,
        validateInstitute,
        validateDegree,
        validateDueDate,
        validateEducationDescription,
        degreeList,
        setDegreeList,
        dataObj,
        setDataObj,
        getRequestData,
        finalData,
        setFinalData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
