import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { useLocation } from "react-router-dom";
import Logo3 from "../images/logo-3.png";

export default function Resume() {
  const { formData, privateInfoValidated } = useContext(Context);
  const location = useLocation();
  const { experiences } = useContext(Context);

  return (
    <div className="resume-container">
      <img src={Logo3} className="logo-3" />
      <div className="name-container">
        <h1 id="first-name">{localStorage.getItem("firstName")}</h1>&nbsp;&nbsp;
        <h1 id="last-name">{localStorage.getItem("lastName")}</h1>
      </div>
      <div className="contact">
        <p>
          <i class="fa-solid fa-at"></i>&nbsp;{localStorage.getItem("mail")}
        </p>
        <p>
          <i class="fa-solid fa-phone"></i>&nbsp;{localStorage.getItem("phone")}
        </p>
      </div>
      {<h4>ჩემ შესახებ</h4>}

      <div className="about-container">
        <p>{localStorage.getItem("about")}</p>
      </div>
      <div className="image-preview">
        <img id="upload-preview" src={localStorage.getItem("image")} />
      </div>
      {location.pathname === "/experience" && (
        <hr style={{ marginTop: "5em", border: "1px solid #C8C8C8" }} />
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
        <h4 style={{ paddingTop: "1.5em" }}>გამოცდილება</h4>
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
              </div>
            )
        )}
      </p>
      <p
        style={{
          color: "#909090",
          fontSize: "16px",
          fontWeight: "400",
          fontStyle: "italic",
        }}
      >
        {/* {localStorage.getItem("durationStart")}{" "}
        {localStorage.getItem("durationStart" && "-")}{" "}
        {localStorage.getItem("durationEnd")} */}
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
          {/* {localStorage.getItem("description")} */}
        </p>
      </div>
    </div>
  );
}
