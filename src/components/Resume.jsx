import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { useLocation } from "react-router-dom";
import Logo3 from "../images/logo-3.png";

export default function Resume() {
  const { formData, privateInfoValidated } = useContext(Context);
  const location = useLocation();

  return (
    <div className="resume-container">
      <img src={Logo3} className="logo-3" />
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
        <p>{localStorage.getItem("about")}</p>
      </div>
      <div className="image-preview">
        {/* <img id="upload-preview" src={localStorage.getItem("image")} /> */}

        <img id="upload-preview" src={localStorage.getItem("image")} />
      </div>
      {location.pathname === "/experience" && (
        <hr style={{ marginTop: "5em", border: "1px solid #C8C8C8" }} />
      )}
      {localStorage.getItem("position") && (
        <h4 style={{ paddingTop: "1.5em" }}>გამოცდილება</h4>
      )}
      <p
        style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "0.5em" }}
      >
        {localStorage.getItem("position")}, {localStorage.getItem("employer")}
      </p>
      <p
        style={{
          color: "#909090",
          fontSize: "16px",
          fontWeight: "400",
        }}
      >
        {localStorage.getItem("durationStart")} -{" "}
        {localStorage.getItem("durationEnd")}
      </p>
      <div className="description-container">
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            color: "black",
          }}
        >
          {localStorage.getItem("description")}
        </p>
      </div>
    </div>
  );
}
