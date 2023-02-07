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
    resetData,
    validatePosition,
    validatePositionSuccess,
    setValidatePositionSuccess,
    validateEmployer,
    validateEmployerSuccess,
    setValidateEmployerSuccess,
    validateDuration,
    validateDurationStartSuccess,
    setValidateDurationStartSuccess,
    validateDurationEndSuccess,
    setValidateDurationEndSuccess,
    validateDescription,
    setValidateDescriptionSuccess,
  } = useContext(Context);
  const positionRef = useRef(null);
  const employerRef = useRef(null);
  const durationStartRef = useRef(null);
  const durationEndRef = useRef(null);
  const descriptionRef = useRef(null);
  useEffect(() => {
    positionRef.current.value = localStorage.getItem("position");
    employerRef.current.value = localStorage.getItem("employer");
    durationStartRef.current.value = localStorage.getItem("durationStart");
    durationEndRef.current.value = localStorage.getItem("durationEnd");
    descriptionRef.current.value = localStorage.getItem("description");
    const isPositionValid = positionRef.current.value.length >= 2;
    const isEmployerValid = employerRef.current.value.length >= 2;
    const isDurationStartValid = durationStartRef.current.value !== "";
    const isDurationEndValid = durationEndRef.current.value !== "";
    const isDescriptionValid = descriptionRef.current.value !== "";

    if (isPositionValid) {
      setValidatePositionSuccess(true);
      setBorder(positionRef, "1px solid #98e373");
    } else if (positionRef.current.value !== "") {
      setValidatePositionSuccess(false);
      setBorder(positionRef, "1px solid #f02424");
    }

    if (isEmployerValid) {
      setValidateEmployerSuccess(true);
      setBorder(employerRef, "1px solid #98e373");
    } else if (employerRef.current.value !== "") {
      setValidateEmployerSuccess(false);
      setBorder(employerRef, "1px solid #f02424");
    }

    if (isDurationStartValid) {
      setValidateDurationStartSuccess(true);
      setBorder(durationStartRef, "1px solid #98e373");
    } else {
      setValidateDurationStartSuccess(true);
      setBorder(durationStartRef, "1px solid #98e373");
    }

    if (isDurationEndValid) {
      setValidateDurationEndSuccess(true);
      setBorder(durationEndRef, "1px solid #98e373");
    } else {
      setValidateDurationEndSuccess(true);
      setBorder(durationEndRef, "1px solid #98e373");
    }

    if (isDescriptionValid) {
      setValidateDescriptionSuccess(true);
      setBorder(descriptionRef, "1px solid #98e373");
    } else {
      setValidateDescriptionSuccess(false);
      setBorder(descriptionRef, "1px solid #8c8c8c");
    }
  }, []);

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
            ref={positionRef}
            onChange={validatePosition}
            value={localStorage.getItem("position")}
            className="position"
            type="text"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
          />
          {validatePositionSuccess && (
            <i
              className="fa-sharp fa-solid fa-circle-check"
              id="correct-position"
            ></i>
          )}
          {validatePositionSuccess === false && (
            <i
              class="fa-solid fa-triangle-exclamation"
              id="incorrect-position"
            ></i>
          )}
          <label for="position" className="bottom-label">
            მინიმუმ 2 სიმბოლო
          </label>
        </div>
        <div className="employer-container">
          <label for="employer" className="top-label">
            დამსაქმებელი
          </label>
          <input
            ref={employerRef}
            onChange={validateEmployer}
            className="employer"
            type="text"
            placeholder="დამსაქმებელი"
          />
          {validateEmployerSuccess && (
            <i
              className="fa-sharp fa-solid fa-circle-check"
              id="correct-employer"
            ></i>
          )}
          {validateEmployerSuccess === false && (
            <i
              class="fa-solid fa-triangle-exclamation"
              id="incorrect-employer"
            ></i>
          )}
          <label for="employer" className="bottom-label">
            მინიმუმ 2 სიმბოლო
          </label>
        </div>
        <div className="duration-container">
          <div className="duration-start">
            <label for="start" className="top-label">
              დაწყების რიცხვი
            </label>
            <input
              className="start"
              type="date"
              value={localStorage.getItem("durationStart")}
              ref={durationStartRef}
              onChange={validateDuration}
            />
          </div>
          <div className="duration-end">
            <label for="end" className="top-label">
              დამთავრების რიცხვი
            </label>
            <input
              className="end"
              type="date"
              value={localStorage.getItem("durationEnd")}
              ref={durationEndRef}
              onChange={validateDuration}
            />
          </div>
        </div>
        <div className="description-container">
          <label for="description" className="top-label">
            აღწერა
          </label>
          <textarea
            className="description"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            ref={descriptionRef}
            value={localStorage.getItem("description")}
            onChange={validateDescription}
          />
        </div>
        <hr style={{ border: "0.5px solid #C1C1C1", marginTop: "1.5em" }} />
        <div className="add-more-experience">
          <button className="add">მეტი გამოცდილების დამატება</button>
        </div>
        <div className="btn-container exp">
          <Link to="/private-info">
            <button>უკან</button>
          </Link>
          <button>შემდეგი</button>
        </div>
      </form>
    </div>
  );
}
