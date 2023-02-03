import React from "react";

export default function PrivateInfo() {
  return (
    <div className="private-info">
      <div className="private-info-form">
        <div className="private-info-form-header">
          <h2>პირადი ინფო</h2>
          <h4>1/3</h4>
          <hr />
        </div>
        <form>
          <div className="form-names-container">
            <label for="first-name">სახელი</label>
            <input
              type="text"
              placeholder="ანზორ"
              className="first-name"
              name="first-name"
            />
            <label for="first-name">მინიმუმ 2 ასო, ქართული ასოები</label>

            <label for="last-name">გვარი</label>
            <input
              type="text"
              placeholder="მუმლაძე"
              className="last-name"
              name="last-name"
            />
            <label for="last-name">მინიმუმ 2 ასო, ქართული ასოები</label>
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
              <button>ატვირთვა</button>
            </label>
          </div>
          <div className="about-me">
            <label for="general-info">ჩემ შესახებ (არასავალდებულო)</label>
            <textarea
              name="general-info"
              placeholder="ზოგადი ინფო შენ შესახებ"
            />
          </div>
          <div className="email">
            <label for="email">ელ.ფოსტა</label>
            <input
              type="email"
              name="email"
              placeholder="anzorr666@redberry.ge"
            ></input>
            <label for="email">უნდა მთავრდებოდეს @redberry.ge-ით</label>
          </div>
          <div className="phone">
            <label for="phone">მობილურის ნომერი</label>
            <input
              type="number"
              name="phone"
              placeholder="+995 551 12 34 56"
            ></input>
            <label for="email">
              უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
            </label>
          </div>
          <button>შემდეგი</button>
        </form>
      </div>
      <div className="resume"></div>
    </div>
  );
}
