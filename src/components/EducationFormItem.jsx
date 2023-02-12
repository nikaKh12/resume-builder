import React, { useContext, useEffect } from "react";
import { Context } from "../Context/Context";

export default function EducationFormItem({ education, onChange }) {
  const { degreeList, setDegreeList } = useContext(Context);
  const { institute, degree, due_date, description } = education;
  const isFieldInvalid = (fieldName) => {
    return !fieldName.isValid && fieldName.touched && fieldName.value !== "";
  };
  const getValidatedClasses = (fieldName) => {
    if (isFieldInvalid(fieldName)) return "danger";
    else if (
      !isFieldInvalid(fieldName) &&
      fieldName.touched &&
      fieldName.value !== ""
    )
      return "success";
  };

  const getValidatedClassesForLabels = (fieldName) => {
    if (isFieldInvalid(fieldName)) return "label-danger";
    else if (
      !isFieldInvalid(fieldName) &&
      fieldName.touched &&
      fieldName.value !== ""
    )
      return "label-success";
  };
  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => res.json())
      .then((data) => {
        setDegreeList(data);
      });
  }, []);
  return (
    <div>
      <div className="institute-container">
        <label
          for="institute"
          className={`top-label ${getValidatedClassesForLabels(institute)}`}
        >
          სასწავლებელი
        </label>
        <input
          type="text"
          placeholder="სასწავლებელი"
          onChange={(e) => onChange(e, "institute")}
          value={institute?.value}
          className={`institute ${getValidatedClasses(institute)}`}
        />
        {!isFieldInvalid(institute) &&
          institute.touched &&
          institute.value !== "" && (
            <i
              className="fa-sharp fa-solid fa-circle-check"
              id="correct-institute"
            ></i>
          )}
        {isFieldInvalid(institute) && (
          <i
            class="fa-solid fa-triangle-exclamation"
            id="incorrect-institute"
          ></i>
        )}
        <label for="institute" className="bottom-label">
          მინიმუმ 2 სიმბოლო
        </label>
      </div>
      <div className="educations-wrapper">
        <div className="degree">
          <label
            for="degree"
            className={`top-label ${getValidatedClassesForLabels(degree)}`}
          >
            ხარისხი
          </label>
          <select
            name="degrees"
            id="degrees"
            onChange={(e) => onChange(e, "degree")}
            value={degree?.value}
            className={`degree ${getValidatedClasses(degree)}`}
          >
            <option value="აირჩიეთ ხარისხი">აირჩიეთ ხარისხი</option>
            {degreeList.map((degree) => (
              <option value={degree.title}>{degree.title}</option>
            ))}
          </select>
        </div>
        <div className="duration-end">
          <label
            for="end"
            className={`top-label ${
              due_date.isValid && due_date.touched && due_date.value !== ""
                ? "label-success"
                : !due_date.isValid && due_date.touched
                ? "label-danger"
                : "label-default"
            }`}
          >
            დამთავრების რიცხვი
          </label>
          <input
            type="date"
            onChange={(e) => onChange(e, "due_date")}
            value={due_date?.value}
            className={`endDate ${
              due_date.isValid && due_date.touched && due_date.value !== ""
                ? "success"
                : !due_date.isValid && due_date.touched
                ? "danger"
                : "default"
            }`}
          />
        </div>
      </div>
      <div className="description-container">
        <label
          for="description"
          className={`top-label ${
            description.isValid &&
            description.touched &&
            description.value !== ""
              ? "label-success"
              : !description.isValid && description.touched
              ? "label-danger"
              : "label-default"
          }`}
        >
          აღწერა
        </label>
        <textarea
          placeholder="განათლების აღწერა"
          onChange={(e) => onChange(e, "description")}
          value={description?.value}
          className={`description ${
            description.isValid &&
            description.touched &&
            description.value !== ""
              ? "success"
              : !description.isValid && description.touched
              ? "danger"
              : "default"
          }`}
        />
      </div>
    </div>
  );
}
