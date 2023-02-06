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

  // TO BE REFACTORED

  return (
    <div className="experience-info-form">
      <Link to="/">
        <i
          class="fa-sharp fa-solid fa-chevron-left return"
          onClick={resetData}
        ></i>
      </Link>
      <FormHeader title="გამოცდილება" count="2" />
      <hr />
      <form>
        <div className="position-container">
          <label for="position" className="top-label">
            თანამდებობა
          </label>
          <input
            className="position"
            type="text"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
          />
          <label for="position" className="bottom-label">
            მინიმუმ 2 სიმბოლო
          </label>
        </div>
        <div className="employer-container">
          <label for="employer" className="top-label">
            დამსაქმებელი
          </label>
          <input className="employer" type="text" placeholder="დამსაქმებელი" />
          <label for="employer" className="bottom-label">
            მინიმუმ 2 სიმბოლო
          </label>
        </div>
        <div className="duration-container">
          <div className="duration-start">
            <label for="start" className="top-label">
              დაწყების რიცხვი
            </label>
            <input className="start" type="date" />
          </div>
          <div className="duration-end">
            <label for="end" className="top-label">
              დამთავრების რიცხვი
            </label>
            <input className="end" type="date" />
          </div>
        </div>
        <div className="description-container">
          <label for="description" className="top-label">
            აღწერა
          </label>
          <textarea
            className="description"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          />
        </div>
        <hr style={{ border: "0.5px solid #C1C1C1", marginTop: "1.5em" }} />
        <div className="add-more-experience">
          <button className="add">მეტი გამოცდილების დამატება</button>
        </div>
        <div className="btn-container exp">
          <button>უკან</button>
          <button>შემდეგი</button>
        </div>
      </form>
    </div>
  );
}
