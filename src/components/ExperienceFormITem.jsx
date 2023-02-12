import React from "react";

function ExperienceFormITem({
  positionRef,
  validatePosition,
  validatePositionSuccess,
  employerRef,
  validateDescription,
  validateEmployer,
  validateEmployerSuccess,
  durationStartRef,
  validateDuration,
  descriptionRef,
  durationEndRef,
  experience,
  onChange,
}) {
  const { position, employer, startDate, endDate, description } = experience;
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
  console.log("here");
  return (
    <div>
      <div className="position-container">
        <label
          for="position"
          className={`top-label ${getValidatedClassesForLabels(position)}`}
        >
          თანამდებობა
        </label>
        <input
          ref={positionRef}
          onChange={(e) => onChange(e, "position")}
          // value={localStorage.getItem("position")}
          value={position?.value}
          className={`position ${getValidatedClasses(position)}`}
          type="text"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
        />
        {!isFieldInvalid(position) &&
          position.touched &&
          position.value !== "" && (
            <i
              className="fa-sharp fa-solid fa-circle-check"
              id="correct-position"
            ></i>
          )}
        {isFieldInvalid(position) && (
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
        <label
          for="employer"
          className={`top-label ${getValidatedClassesForLabels(employer)}`}
        >
          დამსაქმებელი
        </label>
        <input
          ref={employerRef}
          onChange={(e) => onChange(e, "employer")}
          value={employer?.value}
          className={`employer ${getValidatedClasses(employer)}`}
          type="text"
          placeholder="დამსაქმებელი"
        />
        {!isFieldInvalid(employer) &&
          employer.touched &&
          employer.value !== "" && (
            <i
              className="fa-sharp fa-solid fa-circle-check"
              id="correct-employer"
            ></i>
          )}
        {isFieldInvalid(employer) && (
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
          <label
            for="start"
            className={`top-label ${
              startDate.isValid && startDate.touched && startDate.value !== ""
                ? "label-success"
                : !startDate.isValid && startDate.touched
                ? "label-danger"
                : "label-default"
            }`}
          >
            დაწყების რიცხვი
          </label>
          <input
            ref={durationStartRef}
            onChange={(e) => onChange(e, "startDate")}
            value={startDate?.value}
            className={`startDate ${
              startDate.isValid && startDate.touched && startDate.value !== ""
                ? "success"
                : !startDate.isValid && startDate.touched
                ? "danger"
                : "default"
            }`}
            type="date"
            // value={localStorage.getItem("durationStart")}
          />
        </div>
        <div className="duration-end">
          <label
            for="end"
            className={`top-label ${
              endDate.isValid && endDate.touched && endDate.value !== ""
                ? "label-success"
                : !endDate.isValid && endDate.touched
                ? "label-danger"
                : "label-default"
            }`}
          >
            დამთავრების რიცხვი
          </label>
          <input
            ref={durationEndRef}
            onChange={(e) => onChange(e, "endDate")}
            value={endDate?.value}
            className={`endDate ${
              endDate.isValid && endDate.touched && endDate.value !== ""
                ? "success"
                : !endDate.isValid && endDate.touched
                ? "danger"
                : "default"
            }`}
            type="date"
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
          ref={descriptionRef}
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
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        />
        {!description.isValid && description.touched && (
          <i
            class="fa-solid fa-triangle-exclamation"
            id="incorrect-description"
          ></i>
        )}
      </div>
    </div>
  );
}

export default ExperienceFormITem;
