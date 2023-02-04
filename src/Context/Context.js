import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [validateNameSuccess, setValidateNameSuccess] = useState("");
  const [validateLastNameSuccess, setValidateLastNameSuccess] = useState("");
  const [validateMailSuccess, setValidateMailSuccess] = useState("");
  const [validatePhoneSuccess, setValidatePhoneSuccess] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [nameCheck, setNameCheck] = useState(false);
  const [lastNameCheck, setLastNameCheck] = useState(false);
  const [pictureCheck, setPictureCheck] = useState(false);
  const [mailCheck, setMailCheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    photo: "",
    about: "",
    mail: "",
    phone: "",
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
      setNameCheck(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidateNameSuccess(false);
      setNameCheck(false);
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
      setLastNameCheck(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidateLastNameSuccess(false);
      setLastNameCheck(false);
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
      setMailCheck(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidateMailSuccess(false);
      setMailCheck(false);
      event.target.style.border = "1px solid #f93b1d";
    }
    localStorage.setItem("mail", value);
  };

  const validateNumber = (event) => {
    let value = event.target.value;
    let regex = /^\+[0-9]{12}$/;
    setFormData({
      ...formData,
      phone: value,
    });
    if (regex.test(value)) {
      setValidatePhoneSuccess(true);
      setPhoneCheck(true);
      event.target.style.border = "1px solid #98e37e";
    } else {
      setValidatePhoneSuccess(false);
      setPhoneCheck(false);
      event.target.style.border = "1px solid #f93b1d";
    }
    localStorage.setItem("phone", value);
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPictureCheck(true);
      setSelectedImage(e.target.files[0]);
    } else {
      setPictureCheck(false);
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
        validateAbout,
        validateLastNameSuccess,
        setValidateLastNameSuccess,
        selectedImage,
        setSelectedImage,
        imageChange,
        formData,
        setFormData,
        nameCheck,
        lastNameCheck,
        pictureCheck,
        mailCheck,
        phoneCheck,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
