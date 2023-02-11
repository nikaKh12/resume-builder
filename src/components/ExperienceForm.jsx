import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import FormHeader from "./FormHeader";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import {
  getItemFromLocalStorage,
  setBorder,
  setItemToLocalStorage,
} from "../helper/Helper";
import ExperienceFormITem from "./ExperienceFormITem";
import uuid from "react-uuid";
import { EXPERIENCE, EXPERIENCES_KEY } from "../constants";
import { useDebouncedCallback } from "use-debounce";
export default function ExperienceForm() {
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
    experiences,
    setExperiences,
  } = useContext(Context);
  const positionRef = useRef(null);
  const employerRef = useRef(null);
  const durationStartRef = useRef(null);
  const durationEndRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleAddExperience = () => {
    setExperiences({ ...experiences, ...{ [uuid()]: { ...EXPERIENCE } } });
  };
  //uuid  //position, employer..., value
  const handleChange = (key, targetKey, value, event) => {
    isFieldValid(key, targetKey, value);
    const updateExperiences = { ...experiences };
    updateExperiences[key][targetKey] = {
      ...updateExperiences[key][targetKey],
      value,
    };
    setExperiences(updateExperiences);

    setExperiencesToStorage(updateExperiences);
  };

  const setExperiencesToStorage = useDebouncedCallback(
    (updateExperiences) =>
      setItemToLocalStorage(EXPERIENCES_KEY, updateExperiences),
    500
  );

  const isFieldValid = (key, targetKey, value) => {
    switch (targetKey) {
      case "position":
        return validatePosition(key, targetKey, value);
      case "employer":
        return validateEmployer(key, targetKey, value);
      case "startDate":
        return validateDuration(key, targetKey, value);
      case "endDate":
        return validateDuration(key, targetKey, value);
      case "description":
        return validateDescription(key, targetKey, value);
      default:
        return true;
    }
  };

  // const handleClick = (event) => {
  //   Object.values(experiences).map(function (key) {
  //     if (key.position.isValid && key.position.touched) {
  //       setBorder(positionRef, "1px solid #98e37e");
  //     } else {
  //       setBorder(positionRef, "1px solid #f02424");
  //     }
  //     if (key.employer.isValid && key.employer.touched) {
  //       setBorder(employerRef, "1px solid #98e373");
  //     } else {
  //       setBorder(employerRef, "1px solid #f02424");
  //     }
  //     if (key.startDate.isValid) {
  //       setBorder(durationStartRef, "1px solid #98e373");
  //     } else {
  //       setBorder(durationStartRef, "1px solid #f02424");
  //     }
  //     if (
  //       key.endDate.isValid &&
  //       key.endDate.touched &&
  //       key.endDate.value !== ""
  //     ) {
  //       setBorder(durationEndRef, "1px solid #98e373");
  //     } else {
  //       setBorder(durationEndRef, "1px solid #f02424");
  //     }
  //     if (
  //       key.description.isValid &&
  //       key.description.touched &&
  //       key.description.value !== ""
  //     ) {
  //       setBorder(descriptionRef, "1px solid #98e373");
  //     } else {
  //       setBorder(descriptionRef, "1px solid #f02424");
  //     }
  //     if (
  //       key.position.isValid &&
  //       key.position.touched &&
  //       key.employer.isValid &&
  //       key.employer.touched &&
  //       key.startDate.isValid &&
  //       key.startDate.touched &&
  //       key.endDate.isValid &&
  //       key.endDate.touched &&
  //       key.description.isValid &&
  //       key.description.touched
  //     ) {
  //       console.log("validated");
  //     }
  //   });
  // };

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
        {Object.keys(experiences).map((key) => (
          <ExperienceFormITem
            positionRef={positionRef}
            validatePosition={validatePosition}
            validatePositionSuccess={validatePositionSuccess}
            employerRef={employerRef}
            validateDescription={validateDescription}
            validateEmployer={validateEmployer}
            validateEmployerSuccess={validateEmployerSuccess}
            durationStartRef={durationStartRef}
            validateDuration={validateDuration}
            durationEndRef={durationEndRef}
            descriptionRef={descriptionRef}
            experience={experiences[key]}
            onChange={(event, targetKey) =>
              handleChange(key, targetKey, event.target.value, event)
            }
            key={key}
          />
        ))}
        <hr style={{ border: "0.5px solid #C1C1C1", marginTop: "1.5em" }} />
      </form>
      <div className="add-more-experience" onClick={handleAddExperience}>
        <button className="add">მეტი გამოცდილების დამატება</button>
      </div>
      <div className="btn-container exp">
        <Link to="/private-info">
          <button>უკან</button>
        </Link>
        <button>შემდეგი</button>
      </div>
    </div>
  );
}
