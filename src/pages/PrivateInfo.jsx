import React, { useState, useContext } from "react";
import { Context } from "../Context/Context";

export default function PrivateInfo() {
  const {
    validateNameSuccess,
    validateLastNameSuccess,
    validateName,
    validateMail,
    validateNumber,
    validateLastName,
  } = useContext(Context);
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
              {validateNameSuccess && (
                <i
                  className="fa-sharp fa-solid fa-circle-check"
                  id="correct-name"
                ></i>
              )}
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
                onChange={validateLastName}
              />
              {validateLastNameSuccess && (
                <i
                  className="fa-sharp fa-solid fa-circle-check"
                  id="correct-last-name"
                ></i>
              )}
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
