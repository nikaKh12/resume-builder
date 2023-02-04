import React, { useContext, useEffect } from "react";
import { Context } from "../Context/Context";
import Logo3 from "../images/logo-3.png";

export default function Resume() {
  const {
    validateNameSuccess,
    validateLastNameSuccess,
    validateMailSuccess,
    validatePhoneSuccess,
    validateName,
    validateMail,
    validateNumber,
    validateLastName,
    validateAbout,
    selectedImage,
    formData,
  } = useContext(Context);
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("about");
  localStorage.removeItem("phone");
  localStorage.removeItem("mail");
  localStorage.removeItem("image");

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
        {/* {selectedImage && (
          <img id="upload-preview" src={URL.createObjectURL(selectedImage)} />
        )} */}

        <img id="upload-preview" src={localStorage.getItem("image")} />
      </div>
    </div>
  );
}
