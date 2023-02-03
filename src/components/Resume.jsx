import React, { useContext } from "react";
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
  return (
    <div className="resume-container">
      <img src={Logo3} className="logo-3" />
      <div className="name-container">
        <h1 id="first-name">{formData.firstName}</h1>&nbsp;&nbsp;
        <h1 id="last-name">{formData.lastName}</h1>
      </div>
      <div className="contact">
        {formData.mail && (
          <p>
            <i class="fa-solid fa-at"></i>&nbsp;{formData.mail}
          </p>
        )}
        {formData.phone && (
          <p>
            <i class="fa-solid fa-phone"></i>&nbsp;{formData.phone}
          </p>
        )}
      </div>
      {formData.about && <h4>ჩემ შესახებ</h4>}
      <div className="about-container">
        <p>{formData.about}</p>
      </div>
      <div className="image-preview">
        {selectedImage && (
          <img id="upload-preview" src={URL.createObjectURL(selectedImage)} />
        )}
      </div>
    </div>
  );
}
