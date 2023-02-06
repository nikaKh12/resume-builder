import React, { useContext, useRef, useEffect } from "react";
import FormHeader from "./FormHeader";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { InputField } from "./InputField";
import { PrivatePicture } from "./PrivatePicture";
import { AboutMe } from "./AboutMe";
import { Email } from "./Email";
import { Phone } from "./Phone";
import { PrivateInfoBtn } from "./PrivateInfoBtn";
import {
  regex,
  phoneRegex,
  toggleValidation,
  changeColor,
  setBorder,
} from "../helper/Helper";

export default function PrivateInfoForm() {
  const {
    validateNameSuccess,
    setValidateNameSuccess,
    validateLastNameSuccess,
    setValidateLastNameSuccess,
    validatePictureSuccess,
    setValidatePictureSuccess,
    setValidateMailSuccess,
    setValidatePhoneSuccess,
    validateMailSuccess,
    validatePhoneSuccess,
    validateName,
    validateMail,
    validateAbout,
    validateNumber,
    validateLastName,
    resetData,
  } = useContext(Context);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const pictureRef = useRef(null);
  const aboutRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);
  const incorrectNameRef = useRef(null);
  const incorrectLastNameRef = useRef(null);
  const incorrectMailRef = useRef(null);
  const incorrectPhoneRef = useRef(null);
  const pictureIconRef = useRef(null);

  const refs = {
    nameRef,
    incorrectNameRef,
    lastNameRef,
    incorrectLastNameRef,
    pictureRef,
    pictureIconRef,
    aboutRef,
    mailRef,
    incorrectMailRef,
    phoneRef,
    incorrectPhoneRef,
  };
  const lastNameRefs = { lastNameRef, incorrectLastNameRef };
  useEffect(() => {
    if (validatePictureSuccess) {
      changeColor(pictureRef, "black");
    }
    toggleValidation(incorrectNameRef, validateNameSuccess);
    toggleValidation(incorrectLastNameRef, validateLastNameSuccess);
    toggleValidation(incorrectMailRef, validateMailSuccess);
    toggleValidation(incorrectPhoneRef, validatePhoneSuccess);
  }, [
    validatePictureSuccess,
    validateNameSuccess,
    validateLastNameSuccess,
    validateMailSuccess,
    validatePhoneSuccess,
  ]);

  // TO BE REFACTORED
  useEffect(() => {
    nameRef.current.value = localStorage.getItem("firstName");
    lastNameRef.current.value = localStorage.getItem("lastName");
    phoneRef.current.value = localStorage.getItem("phone");
    const email = (mailRef.current.value = localStorage.getItem("mail"));
    const isNameValid =
      regex.test(nameRef.current.value) && nameRef.current.value.length >= 2;
    const isLastNameValid =
      regex.test(lastNameRef.current.value) &&
      lastNameRef.current.value.length >= 2;
    const isEmailValid = email && "@redberry.ge" === email.slice(-12);
    const isPhoneValid = phoneRegex.test(phoneRef.current.value);

    if (isNameValid) {
      setValidateNameSuccess(true);
      setBorder(nameRef, "1px solid #98e373");
    } else if (nameRef.current.value !== "") {
      setValidateNameSuccess(false);
      setBorder(nameRef, "1px solid #f02424");
    }

    if (isLastNameValid) {
      setValidateLastNameSuccess(true);
      setBorder(lastNameRef, "1px solid #98e373");
    } else if (lastNameRef.current.value !== "") {
      setValidateLastNameSuccess(false);
      setBorder(lastNameRef, "1px solid #f02424");
    }

    if (aboutRef.current.value !== "") {
      setBorder(aboutRef, "1px solid #98e373");
    }

    if (localStorage.getItem("image")) {
      setValidatePictureSuccess(true);
      changeColor(pictureRef, "black");
    } else {
      setValidatePictureSuccess(false);
    }

    if (isEmailValid) {
      setValidateMailSuccess(true);
      setBorder(mailRef, "1px solid #98e373");
    } else if (!isEmailValid && mailRef.current.value !== "") {
      setValidateMailSuccess(false);
      setBorder(mailRef, "1px solid #f02424");
    }

    if (isPhoneValid) {
      setBorder(phoneRef, "1px solid #98e373");
      setValidatePhoneSuccess(true);
    } else if (!isPhoneValid && phoneRef.current.value !== "") {
      setValidatePhoneSuccess(false);
      setBorder(phoneRef, "1px solid #f02424");
    }
  }, []);

  return (
    <div className="private-info-form">
      <Link to="/">
        <i
          class="fa-sharp fa-solid fa-chevron-left return"
          onClick={resetData}
        ></i>
      </Link>
      <FormHeader title="პირადი ინფო" count="1" />
      <hr />
      <form>
        <div className="form-names-container">
          <InputField
            className="first-name"
            placeholder="ანზორი"
            value={localStorage.getItem("firstName")}
            onChange={validateName}
            validateSuccess={validateNameSuccess}
            title="სახელი"
            ref={refs}
          />
          <InputField
            className="last-name"
            placeholder="მუმლაძე"
            value={localStorage.getItem("lastName")}
            onChange={validateLastName}
            validateSuccess={validateLastNameSuccess}
            title="გვარი"
            ref={lastNameRefs}
          />
        </div>
        <PrivatePicture
          className="private-picture"
          validatePictureSuccess={validatePictureSuccess}
          setValidatePictureSuccess={setValidatePictureSuccess}
          ref={refs}
        />
        <AboutMe
          className="about-me"
          validateAbout={validateAbout}
          ref={refs}
        />
        <Email
          className="email"
          validateMail={validateMail}
          validateMailSuccess={validateMailSuccess}
          ref={refs}
        />
        <Phone
          className="phone"
          validatePhoneSuccess={validatePhoneSuccess}
          validateNumber={validateNumber}
          ref={refs}
        />
        <PrivateInfoBtn
          className="btn-container"
          validateNameSuccess={validateNameSuccess}
          validateLastNameSuccess={validateLastNameSuccess}
          validatePictureSuccess={validatePictureSuccess}
          validateMailSuccess={validateMailSuccess}
          validatePhoneSuccess={validatePhoneSuccess}
          setValidatePictureSuccess={setValidatePictureSuccess}
          ref={refs}
        />
      </form>
    </div>
  );
}
