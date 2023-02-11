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

  // useLayoutEffect(() => {
  //   console.log(positionRef.current.value, "value");
  //   const isPositionValid = positionRef.current.value.length >= 2;
  //   const isEmployerValid = employerRef.current.value.length >= 2;
  //   const isDurationStartValid = durationStartRef.current.value !== "";
  //   const isDurationEndValid = durationEndRef.current.value !== "";
  //   const isDescriptionValid = descriptionRef.current.value !== "";

  //   if (isPositionValid) {
  //     setValidatePositionSuccess(true);
  //     setBorder(positionRef, "1px solid #98e373");
  //   } else if (positionRef.current.value !== "") {
  //     setValidatePositionSuccess(false);
  //     setBorder(positionRef, "1px solid #f02424");
  //   }

  //   if (isEmployerValid) {
  //     setValidateEmployerSuccess(true);
  //     setBorder(employerRef, "1px solid #98e373");
  //   } else if (employerRef.current.value !== "") {
  //     setValidateEmployerSuccess(false);
  //     setBorder(employerRef, "1px solid #f02424");
  //   }

  //   if (isDurationStartValid) {
  //     setValidateDurationStartSuccess(true);
  //     setBorder(durationStartRef, "1px solid #98e373");
  //   } else {
  //     setValidateDurationStartSuccess(false);
  //     setBorder(durationStartRef, "1px solid #8c8c8c");
  //   }

  //   if (isDurationEndValid) {
  //     setValidateDurationEndSuccess(true);
  //     setBorder(durationEndRef, "1px solid #98e373");
  //   } else {
  //     setValidateDurationEndSuccess(false);
  //     setBorder(durationEndRef, "1px solid #8c8c8c");
  //   }

  //   if (isDescriptionValid) {
  //     setValidateDescriptionSuccess(true);
  //     setBorder(descriptionRef, "1px solid #98e373");
  //   } else {
  //     setValidateDescriptionSuccess(false);
  //     setBorder(descriptionRef, "1px solid #8c8c8c");
  //   }
  // }, []);

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
  console.log(experiences);
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
      default:
        return true;
    }
  };
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
