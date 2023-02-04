import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import { Context } from "../Context/Context";

export default function PrivateInfoForm() {
  const {
    validateNameSuccess,
    validateLastNameSuccess,
    validateMailSuccess,
    validatePhoneSuccess,
    validateName,
    validateMail,
    validateAbout,
    validateNumber,
    validateLastName,
    imageChange,
    nameCheck,
    lastNameCheck,
    pictureCheck,
    mailCheck,
    phoneCheck,
    setCheck,
    clearLocalStorage,
  } = useContext(Context);
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const pictureRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);
  const incorrectNameRef = useRef(null);
  const incorrectLastNameRef = useRef(null);
  const incorrectMailRef = useRef(null);
  const incorrectPhoneRef = useRef(null);

  useEffect(() => {
    if (pictureCheck) {
      pictureRef.current.style.color = "black";
    }
    if (nameCheck) {
      incorrectNameRef.current.style.visibility = "hidden";
    }
    if (lastNameCheck) {
      incorrectLastNameRef.current.style.visibility = "hidden";
    }
    if (mailCheck) {
      incorrectMailRef.current.style.visibility = "hidden";
    }
    if (phoneCheck) {
      incorrectPhoneRef.current.style.visibility = "hidden";
    }
  }, [pictureCheck, nameCheck, lastNameCheck, mailCheck, phoneCheck]);

  return (
    <div className="private-info-form">
      <Link to="/">
        <i
          class="fa-sharp fa-solid fa-chevron-left return"
          onClick={clearLocalStorage}
        ></i>
      </Link>
      <div className="private-info-form-header">
        <h2 id="private-info-title">პირადი ინფო</h2>
        <h2 id="numeration">1/3</h2>
      </div>
      <hr />
      <form>
        <div className="form-names-container">
          <div className="first-name">
            <label for="first-name" className="top-label">
              სახელი
            </label>
            <input
              type="text"
              placeholder="ანზორ"
              className="first-name"
              name="first-name"
              ref={nameRef}
              onChange={validateName}
            />
            {validateNameSuccess && (
              <i
                className="fa-sharp fa-solid fa-circle-check"
                id="correct-name"
              ></i>
            )}
            {validateNameSuccess === false && (
              <i
                class="fa-solid fa-triangle-exclamation"
                id="incorrect-name"
              ></i>
            )}
            <i
              class="fa-solid fa-triangle-exclamation"
              id="incorrect-name"
              ref={incorrectNameRef}
              style={{ visibility: "hidden" }}
            ></i>

            <label for="first-name" className="bottom-label">
              მინიმუმ 2 ასო, ქართული ასოები
            </label>
          </div>

          <div className="last-name">
            <label for="last-name" className="top-label">
              გვარი
            </label>
            <input
              type="text"
              placeholder="მუმლაძე"
              className="last-name"
              name="last-name"
              ref={lastNameRef}
              onChange={validateLastName}
            />
            {validateLastNameSuccess && (
              <i
                className="fa-sharp fa-solid fa-circle-check"
                id="correct-last-name"
              ></i>
            )}
            {validateLastNameSuccess === false && (
              <i
                class="fa-solid fa-triangle-exclamation"
                id="incorrect-last-name"
              ></i>
            )}
            <i
              class="fa-solid fa-triangle-exclamation"
              id="incorrect-last-name"
              style={{ visibility: "hidden" }}
              ref={incorrectLastNameRef}
            ></i>
            <label for="last-name" className="bottom-label">
              მინიმუმ 2 ასო, ქართული ასოები
            </label>
          </div>
        </div>
        <div className="private-picture">
          <h3 ref={pictureRef}>პირადი ფოტოს ატვირთვა</h3>
          <input
            type="file"
            id="upload"
            name="upload"
            accept="image/*"
            onChange={(e) => {
              let img = new Image();
              const imgParent = document.querySelector(".image-preview");
              imgParent.appendChild(img);
              img.setAttribute("id", "upload-preview");
              let output = document.getElementById("upload-preview");
              output.src = URL.createObjectURL(e.target.files[0]);
              output.onload = () => {
                URL.revokeObjectURL(output.src);
              };
              const image = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(image);
              reader.onload = () => {
                let result = reader.result;
                localStorage.setItem("image", result);
              };
            }}
            style={{ display: "none" }}
          />
          <label className="upload-label" for="upload">
            ატვირთვა
          </label>
        </div>
        <div className="about-me">
          <label for="general-info" className="top-label">
            ჩემ შესახებ (არასავალდებულო)
          </label>
          <textarea
            name="general-info"
            placeholder="ზოგადი ინფო შენ შესახებ"
            onChange={validateAbout}
          />
        </div>
        <div className="email">
          <label for="email" className="top-label">
            ელ.ფოსტა
          </label>
          <input
            type="email"
            name="email"
            placeholder="anzorr666@redberry.ge"
            ref={mailRef}
            onChange={validateMail}
          ></input>
          {validateMailSuccess && (
            <i
              className="fa-sharp fa-solid fa-circle-check"
              id="correct-mail"
            ></i>
          )}
          {validateMailSuccess === false && (
            <i class="fa-solid fa-triangle-exclamation" id="incorrect-mail"></i>
          )}
          <i
            class="fa-solid fa-triangle-exclamation"
            id="incorrect-mail"
            style={{ visibility: "hidden" }}
            ref={incorrectMailRef}
          ></i>
          <label for="email" className="bottom-label">
            უნდა მთავრდებოდეს @redberry.ge-ით
          </label>
        </div>
        <div className="phone">
          <label for="phone" className="top-label">
            მობილურის ნომერი
          </label>
          {validatePhoneSuccess && (
            <i
              className="fa-sharp fa-solid fa-circle-check"
              id="correct-phone"
            ></i>
          )}
          {validatePhoneSuccess === false && (
            <i
              class="fa-solid fa-triangle-exclamation"
              id="incorrect-phone"
            ></i>
          )}
          <i
            class="fa-solid fa-triangle-exclamation"
            id="incorrect-phone"
            style={{ visibility: "hidden" }}
            ref={incorrectPhoneRef}
          ></i>
          <input
            type="text"
            name="phone"
            placeholder="+995 551 12 34 56"
            ref={phoneRef}
            onChange={validateNumber}
          ></input>
          <label for="email" className="bottom-label">
            უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
          </label>
        </div>
        <div className="btn-container">
          <button
            onClick={(event) => {
              event.preventDefault();

              if (!nameCheck) {
                nameRef.current.style.border = "1px solid #f02424";
                incorrectNameRef.current.style.visibility = "visible";
              }
              if (!lastNameCheck) {
                lastNameRef.current.style.border = "1px solid #f02424";
                incorrectLastNameRef.current.style.visibility = "visible";
              }
              if (!pictureCheck) {
                pictureRef.current.style.color = "#f02424";
              }
              if (!mailCheck) {
                mailRef.current.style.border = "1px solid #f02424";
                incorrectMailRef.current.style.visibility = "visible";
              }
              if (!phoneCheck) {
                phoneRef.current.style.border = "1px solid #f02424";
                incorrectPhoneRef.current.style.visibility = "visible";
              }
              if (
                nameCheck &&
                lastNameCheck &&
                pictureCheck &&
                mailCheck &&
                phoneCheck
              ) {
                console.log("validated");
              }
            }}
          >
            შემდეგი
          </button>
        </div>
      </form>
    </div>
  );
}
