import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { useLocation } from "react-router-dom";
import Logo3 from "../images/logo-3.png";

export default function Resume() {
  const { formData, privateInfoValidated } = useContext(Context);
  const location = useLocation();
  const { experiences } = useContext(Context);
  const { educations } = useContext(Context);
  return (
    <div className="resume-container">
      <div className="name-container">
        <h1 id="first-name">{localStorage.getItem("firstName")}</h1>&nbsp;&nbsp;
        <h1 id="last-name">{localStorage.getItem("lastName")}</h1>
      </div>
      <div className="contact">
        {localStorage.getItem("mail") && (
          <p>
            <i class="fa-solid fa-at"></i>&nbsp;{localStorage.getItem("mail")}
          </p>
        )}
        {localStorage.getItem("phone") && (
          <p>
            <i class="fa-solid fa-phone"></i>&nbsp;
            {localStorage.getItem("phone")}
          </p>
        )}
      </div>
      {localStorage.getItem("about") && <h4>ჩემ შესახებ</h4>}

      <div className="about-container">
        <p style={{ lineHeight: "22px" }}>{localStorage.getItem("about")}</p>
      </div>

      <div className="image-preview">
        <img id="upload-preview" src={localStorage.getItem("image")} />
      </div>
      {location.pathname !== "/private-info" && (
        <hr style={{ marginTop: "2em", border: "1px solid #C8C8C8" }} />
      )}
      {/* {localStorage.getItem("position") && (
        <h4 style={{ paddingTop: "1.5em" }}>გამოცდილება</h4>
      )} */}
      <p
        style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "0.5em" }}
      >
        {/* {localStorage.getItem("position")}
        {localStorage.getItem("position") && ","}{" "}
        {localStorage.getItem("employer")} */}

        {localStorage.getItem("experiences") && (
          <h4 style={{ paddingTop: "1.5em" }}>გამოცდილება</h4>
        )}
        {/* <div className="resume-wrapper"> */}
        {Object.keys(experiences).map(
          (key) =>
            experiences[key] && (
              <div key={key}>
                {`${experiences[key].position.value}${
                  experiences[key].position.value && ","
                } ${experiences[key].employer.value}`}

                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#919191",
                    marginTop: "0.5em",
                  }}
                >
                  {" "}
                  {`${experiences[key].startDate.value}`}{" "}
                  {experiences[key].startDate.value && "-"}{" "}
                  {`${experiences[key].endDate.value}`}
                </p>
                <p
                  style={{
                    marginTop: "0.8em",
                    color: "black",
                    fontSize: "16px",
                    lineHeight: "22px",
                  }}
                ></p>
                <div className="description-container">
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "black",
                      lineHeight: "22px",
                    }}
                  >
                    {`${experiences[key].description.value}`}
                  </p>
                </div>
              </div>
            )
        )}
        {localStorage.getItem("experiences") && (
          <hr style={{ border: "1px solid #c8c8c8" }} />
        )}
        {/* </div> */}
      </p>

      {localStorage.getItem("educations") && (
        <h4 style={{ paddingTop: "1.5em" }}>განათლება</h4>
      )}
      {Object.keys(educations).map(
        (key) =>
          educations[key] && (
            <div key={key}>
              <p style={{ fontWeight: "bold" }}>
                {`${educations[key].institute.value}${
                  educations[key].institute.value && ","
                } ${
                  educations[key].degree.value == 1
                    ? "საშუალო სკოლის დიპლომი"
                    : educations[key].degree.value == 2
                    ? "ზოგადსაგანმანათლებლო დიპლომი"
                    : educations[key].degree.value == 3
                    ? "ბაკალავრი"
                    : educations[key].degree.value == 4
                    ? "მაგისტრი"
                    : educations[key].degree.value == 5
                    ? "დოქტორი"
                    : educations[key].degree.value == 6
                    ? "ასოცირებული ხარისხი"
                    : educations[key].degree.value == 7
                    ? "სტუდენტი"
                    : educations[key].degree.value == 8
                    ? "კოლეჯი(ხარისხის გარეშე)"
                    : educations[key].degree.value == 9
                    ? "სხვა"
                    : ""
                }`}
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#919191",
                  marginTop: "0.5em",
                }}
              >
                {educations[key].due_date.value}
              </p>
              <div className="description-container">
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "black",
                    lineHeight: "22px",
                  }}
                >
                  {`${educations[key].description.value}`}
                </p>
              </div>
            </div>
          )
      )}

      <img src={Logo3} className="logo-3" />
    </div>
  );
}
