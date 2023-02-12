import React, { useContext, useRef } from "react";
import FormHeader from "./FormHeader";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import EducationFormItem from "./EducationFormItem";
import {
  getItemFromLocalStorage,
  setBorder,
  setItemToLocalStorage,
} from "../helper/Helper";
import uuid from "react-uuid";
import { EDUCATION, EDUCATION_KEY } from "../constants";
import { useDebouncedCallback } from "use-debounce";

export default function EducationForm() {
  const {
    resetData,
    educations,
    setEducations,
    validateInstitute,
    validateDegree,
    validateDueDate,
    validateEducationDescription,
    dataObj,
  } = useContext(Context);
  const handleAddEducation = () => {
    setEducations({ ...educations, ...{ [uuid()]: { ...EDUCATION } } });
  };

  const handleChange = (key, targetKey, value, event) => {
    isFieldValid(key, targetKey, value);
    const updateEducations = { ...educations };
    updateEducations[key][targetKey] = {
      ...updateEducations[key][targetKey],
      value,
    };
    setEducations(updateEducations);

    setEducationsToStorage(updateEducations);
  };

  const setEducationsToStorage = useDebouncedCallback(
    (updateEducations) =>
      setItemToLocalStorage(EDUCATION_KEY, updateEducations),
    500
  );

  const isFieldValid = (key, targetKey, value) => {
    switch (targetKey) {
      case "institute":
        return validateInstitute(key, targetKey, value);
      case "degree":
        return validateDegree(key, targetKey, value);
      case "due_date":
        return validateDueDate(key, targetKey, value);
      case "description":
        return validateEducationDescription(key, targetKey, value);
      default:
        return true;
    }
  };
  console.log(dataObj);
  return (
    <div className="education-info-form">
      <Link to="/">
        <i
          class="fa-sharp fa-solid fa-chevron-left return"
          onClick={resetData}
        ></i>
      </Link>
      <FormHeader title="განათლება" count="3" />
      <hr />
      <form>
        {Object.keys(educations).map((key) => (
          <EducationFormItem
            education={educations[key]}
            onChange={(event, targetKey) =>
              handleChange(key, targetKey, event.target.value, event)
            }
            key={key}
          />
        ))}

        <hr style={{ border: "0.5px solid #C1C1C1", marginTop: "1.5em" }} />
      </form>
      <div className="add-more-educations" onClick={handleAddEducation}>
        <button className="add">სხვა სასწავლებლის დამატება</button>
      </div>
      <div className="btn-container exp" id="btn-container-edu">
        <Link to="/experience">
          <button>უკან</button>
        </Link>
        <button>დასრულება</button>
      </div>
    </div>
  );
}
