import React, { useContext, useRef, useEffect } from "react";
import FormHeader from "./FormHeader";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { regex, phoneRegex } from "../helper/Helper";
import { FirstName } from "./FirstName";
import { LastName } from "./LastName";
import { PrivatePicture } from "./PrivatePicture";
import { AboutMe } from "./AboutMe";
import { Email } from "./Email";
import { Phone } from "./Phone";
import { PrivateInfoBtn } from "./PrivateInfoBtn";

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

  useEffect(() => {
    if (validatePictureSuccess) {
      pictureRef.current.style.color = "black";
    }
    if (validateNameSuccess) {
      incorrectNameRef.current.style.visibility = "hidden";
    }
    if (validateLastNameSuccess) {
      incorrectLastNameRef.current.style.visibility = "hidden";
    }
    if (validateMailSuccess) {
      incorrectMailRef.current.style.visibility = "hidden";
    }
    if (validatePhoneSuccess) {
      incorrectPhoneRef.current.style.visibility = "hidden";
    }
  }, [
    validatePictureSuccess,
    validateNameSuccess,
    validateLastName,
    validateMailSuccess,
    validatePhoneSuccess,
  ]);

  // TO BE REFACTORED
  useEffect(() => {
    if (
      (nameRef.current.value = localStorage.getItem("firstName")) &&
      regex.test(nameRef.current.value) &&
      nameRef.current.value.length >= 2
    ) {
      nameRef.current.style.border = "1px solid #98e37e";
      setValidateNameSuccess(true);
    } else if (nameRef.current.value !== "") {
      setValidateNameSuccess(false);
      nameRef.current.style.border = "1px solid #f02424";
      nameRef.current.value = localStorage.getItem("firstName");
    }
    if (
      (lastNameRef.current.value =
        localStorage.getItem("lastName") &&
        regex.test(lastNameRef.current.value) &&
        lastNameRef.current.value.length >= 2)
    ) {
      lastNameRef.current.style.border = "1px solid #98e37e";
      setValidateLastNameSuccess(true);
      lastNameRef.current.value = localStorage.getItem("lastName");
    } else if (
      !regex.test(lastNameRef.current.value) &&
      lastNameRef.current.value !== ""
    ) {
      setValidateLastNameSuccess(false);
      lastNameRef.current.style.border = "1px solid #f02424";
      lastNameRef.current.value = localStorage.getItem("lastName");
    }

    if (aboutRef.current.value !== "") {
      aboutRef.current.style.border = "1px solid #98e373";
    }

    if (localStorage.getItem("image")) {
      setValidatePictureSuccess(true);
      pictureRef.current.style.color = "black";
    } else {
      setValidatePictureSuccess(false);
    }

    if (
      (mailRef.current.value =
        localStorage.getItem("mail") &&
        "@redberry.ge" === mailRef.current.value.slice(-12))
    ) {
      mailRef.current.style.border = "1px solid #98e37e";
      setValidateMailSuccess(true);
      mailRef.current.value = localStorage.getItem("mail");
    } else if (
      "@redberry.ge" !== mailRef.current.value.slice(-12) &&
      mailRef.current.value !== ""
    ) {
      setValidateMailSuccess(false);
      mailRef.current.value = localStorage.getItem("mail");
      mailRef.current.style.border = "1px solid #f02424";
    }

    if (
      (phoneRef.current.value =
        localStorage.getItem("phone") &&
        phoneRegex.test(phoneRef.current.value))
    ) {
      phoneRef.current.style.border = "1px solid #98e37e";
      setValidatePhoneSuccess(true);
      phoneRef.current.value = localStorage.getItem("phone");
    } else if (
      !phoneRegex.test(phoneRef.current.value) &&
      phoneRef.current.value !== ""
    ) {
      setValidatePhoneSuccess(false);
      phoneRef.current.style.border = "1px solid #f02424";
      phoneRef.current.value = localStorage.getItem("phone");
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
          <FirstName
            className="first-name"
            placeholder="ანზორი"
            value={localStorage.getItem("firstName")}
            onChange={validateName}
            validateNameSuccess={validateNameSuccess}
            ref={refs}
          />
          <LastName
            className="last-name"
            placeholder="მუმლაძე"
            value={localStorage.getItem("lastName")}
            onChange={validateLastName}
            validateLastNameSuccess={validateLastNameSuccess}
            ref={refs}
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
