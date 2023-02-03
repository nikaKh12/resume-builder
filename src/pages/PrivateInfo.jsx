import React, { useState } from "react";

export default function PrivateInfo() {
  const [validateNameSuccess, setValidateNameSuccess] = useState("");
  const [validateMailSuccess, setValidateMailSuccess] = useState("");
  const [validatePhoneSuccess, setValidatePhoneSuccess] = useState("");

  const validateName = (event) => {
    let value = event.target.value;
    let regex = /^[\u10A0-\u10FF]+$/;
    if (value.length >= 2 && regex.test(value)) {
      setValidateNameSuccess(true);
      event.target.style.border = "1px solid green";
    } else {
      setValidateNameSuccess(false);
      event.target.style.border = "1px solid red";
    }
  };

  const validateMail = (event) => {
    let value = event.target.value;
    let check = "@redberry.ge";
    if (check === value.slice(-12)) {
      setValidateMailSuccess(true);
      event.target.style.border = "1px solid green";
    } else {
      setValidateMailSuccess(false);
      event.target.style.border = "1px solid red";
    }
  };

  const validateNumber = (event) => {
    let value = event.target.value;
    let regex = /^\+[0-9]{12}$/;
    if (regex.test(value)) {
      setValidatePhoneSuccess(true);
      event.target.style.border = "1px solid green";
    } else {
      setValidatePhoneSuccess(false);
      event.target.style.border = "1px solid red";
    }
  };
  return (
    <div className="private-info">
      <div className="private-info-form">
        <div className="private-info-form-header">
          <h2>პირადი ინფო</h2>
          <h2>1/3</h2>
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
                onChange={validateName}
              />
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
                onChange={validateName}
              />
              <label for="last-name" className="bottom-label">
                მინიმუმ 2 ასო, ქართული ასოები
              </label>
            </div>
          </div>
          <div className="private-picture">
            <h3>პირადი ფოტოს ატვირთვა</h3>
            <input
              type="file"
              id="upload"
              name="upload"
              hidden
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
            <input name="general-info" placeholder="ზოგადი ინფო შენ შესახებ" />
          </div>
          <div className="email">
            <label for="email" className="top-label">
              ელ.ფოსტა
            </label>
            <input
              type="email"
              name="email"
              placeholder="anzorr666@redberry.ge"
              onChange={validateMail}
            ></input>
            <label for="email" className="bottom-label">
              უნდა მთავრდებოდეს @redberry.ge-ით
            </label>
          </div>
          <div className="phone">
            <label for="phone" className="top-label">
              მობილურის ნომერი
            </label>
            <input
              type="text"
              name="phone"
              placeholder="+995 551 12 34 56"
              onChange={validateNumber}
            ></input>
            <label for="email" className="bottom-label">
              უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
            </label>
          </div>
          <div className="btn-container">
            <button>შემდეგი</button>
          </div>
        </form>
      </div>
      <div className="resume"></div>
    </div>
  );
}
