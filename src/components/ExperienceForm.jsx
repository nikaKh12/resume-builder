import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import FormHeader from "./FormHeader";
import { Link, useNavigate } from "react-router-dom";
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
import { Navigate } from "react-router-dom";
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
  const navigate = useNavigate();
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

  const handleClick = () => {
    Object.values(experiences).map((values) => {
      if (
        values.position.isValid &&
        values.employer.isValid &&
        values.startDate.isValid &&
        values.endDate.isValid &&
        values.description.isValid
      ) {
        navigate("/education");
      }
    });
  };

  return (
    <div className="experience-info-form">
      <Link to="/">
        <i
          class="fa-sharp fa-solid fa-chevron-left return"
          onClick={resetData}
        ></i>
      </Link>
      <FormHeader title="?????????????????????????????????" count="2" />
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
        <button className="add">???????????? ???????????????????????????????????? ????????????????????????</button>
      </div>
      <div className="btn-container exp">
        <Link to="/private-info">
          <button>????????????</button>
        </Link>
        <button onClick={handleClick}>?????????????????????</button>
      </div>
    </div>
  );
}
