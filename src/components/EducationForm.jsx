import React, { useContext, useEffect, useRef, useState } from "react";
import FormHeader from "./FormHeader";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import EducationFormItem from "./EducationFormItem";
import { Navigate } from "react-router-dom";
import {
  getItemFromLocalStorage,
  setBorder,
  setItemToLocalStorage,
} from "../helper/Helper";
import uuid from "react-uuid";
import { EDUCATION, EDUCATION_KEY } from "../constants";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";

export default function EducationForm() {
  const navigate = useNavigate();
  const {
    resetData,
    educations,
    setEducations,
    validateInstitute,
    validateDegree,
    validateDueDate,
    validateEducationDescription,
    dataObj,
    getRequestData,
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

  const [formData, setFormData] = useState({});
  const post = () => {
    // const formData = new FormData({
    //   name: "lasha",
    // });
    // console.log(
    //   dataObj.educations[0][Object.keys(dataObj.educations[0])].degree.value
    // );
    for (let i = 0; i < dataObj.educations; i++) {
      console.log(dataObj.educations[i]);
    }
    const requestData = getRequestData();
    const data = {
      ...requestData,
      experiences: Object.values(requestData.experiences).map((experience) => {
        return {
          description: experience.description.value,
          employer: experience.employer.value,
          due_date: experience.endDate.value,
          start_date: experience.startDate.value,
          position: experience.position.value,
        };
      }),
      educations: Object.values(requestData.educations).map((education) => {
        const ed = education; //Object.values(education);
        return {
          description: ed.description?.value,
          degree_id: ed.degree?.value,
          due_date: ed.due_date?.value,
          institute: ed.institute?.value,
        };
      }),
    };
    console.log(data, "data");

    // setFormData({
    //   ...dataObj,
    //   educations: [
    //     {
    //       institute:
    //         dataObj.educations[0][Object.keys(dataObj.educations[0])].institute
    //           .value,
    //       degree:
    //         dataObj.educations[0][Object.keys(dataObj.educations[0])].degree
    //           .value,
    //       due_date:
    //         dataObj.educations[0][Object.keys(dataObj.educations[0])].due_date
    //           .value,
    //       description:
    //         dataObj.educations[0][Object.keys(dataObj.educations[0])]
    //           .description.value,
    //     },
    //   ],
    //   experiences: [
    //     {
    //       position:
    //         dataObj.experiences[0][Object.keys(dataObj.experiences[0])].position
    //           .value,
    //       employer:
    //         dataObj.experiences[0][Object.keys(dataObj.experiences[0])].employer
    //           .value,
    //       start_date:
    //         dataObj.experiences[0][Object.keys(dataObj.experiences[0])]
    //           .startDate.value,
    //       description:
    //         dataObj.experiences[0][Object.keys(dataObj.experiences[0])]
    //           .description.value,
    //     },
    //   ],
    // });
    // console.log("formData, dataObj");

    // formData.set("educations", [
    //   {
    //     institute: dataObj.educations.institute,
    //     degree: dataObj.educations.degree,
    //     due_date: dataObj.educations.due_date,
    //     description: dataObj.educations.description,
    //   },
    // ]);
    // formData.set("experiences", [
    //   {
    //     position: dataObj.experiences.position,
    //     employer: dataObj.experiences.employer,
    //     start_date: dataObj.experiences.start_date,
    //     description: dataObj.experiences.description,
    //   },
    // ]);
    console.log(formData);
    const base64 = localStorage["image"];
    const base64Parts = base64.split(",");
    const fileFormat = base64Parts[0].split(";")[1];
    const fileContent = base64Parts[1];
    const file = new File([fileContent], "image", { type: fileFormat });
    axios
      .post("https://resume.redberryinternship.ge/api/cvs", {
        ...data,
        image: file,
      })
      .then((res) => (res.ok ? console.log(formData) : console.log("false")));
    // fetch("https://resume.redberryinternship.ge/api/cvs", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: JSON.stringify(formData),
    // }).then((res) => (res.ok ? console.log(formData) : console.log("false")));
    console.log(formData);
  };
  console.log(educations, "educations");
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
        <button onClick={post}>დასრულება</button>
      </div>
    </div>
  );
}
