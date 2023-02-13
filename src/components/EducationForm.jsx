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
  const post = async () => {
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

    // const base64 = localStorage["image"];
    // const base64Parts = base64.split(",");
    // const fileFormat = base64Parts[0].split(";")[1];
    // const fileContent = base64Parts[1];
    // const file = new File([fileContent], "image", { type: fileFormat });
    const d = new FormData();
    d.append("image", data.iamge);
    Object.keys(data).forEach((key) => {
      if (key !== "image") {
        d.append([key], data[key]);
      }
    });

    axios
      .post("https://resume.redberryinternship.ge/api/cvs", d, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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

  function getBase64(file) {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(new Blob(file));

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      return fileInfo;
    });
  }
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
