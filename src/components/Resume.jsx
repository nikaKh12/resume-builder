import React, { useContext } from "react";
import { Context } from "../Context/Context";

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
    selectedImage,
  } = useContext(Context);
  return (
    <div className="resume-container">
      <div className="name-container">
        <h1 id="first-name">ანზორ</h1>&nbsp;&nbsp;
        <h1 id="last-name">მელაძე</h1>
      </div>
      <p>
        <i class="fa-solid fa-at"></i>nika@redberry.ge
      </p>
      <p>
        <i class="fa-solid fa-phone"></i>+995514163443
      </p>
      <h4>ჩემ შესახებ</h4>
      <div className="about-container">
        <p>
          ძალიან მიყვარს დიზაინის კეთება ისე რო ყოველ დილით გამხნევებული ვაკეთებ
          ვარჯიშებს.
        </p>
      </div>
      <div className="image-preview">
        {selectedImage && (
          <img id="upload-preview" src={URL.createObjectURL(selectedImage)} />
        )}
      </div>
    </div>
  );
}
