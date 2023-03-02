import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Logo3 from "../images/logo-3.png";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";

export default function FinalResume() {
  const { finalData, resetData } = useContext(Context);
  const imageBlob = new Blob([finalData.image], { type: "image/jpeg" });
  const imageUrl = URL.createObjectURL(imageBlob);

  return (
    <>
      <Popup />
      <Link to="/">
        <i
          class="fa-sharp fa-solid fa-chevron-left return"
          onClick={resetData}
          style={{ margin: "1.5em" }}
        ></i>
      </Link>
      <div className="final-resume">
        <div className="name-container">
          <h1 id="first-name">{finalData.name}</h1>&nbsp;&nbsp;
          <h1 id="last-name">{finalData.surname}</h1>
        </div>
        <div className="contact">
          <p>
            <i class="fa-solid fa-at"></i>&nbsp;{finalData.email}
          </p>
          <p style={{ marginTop: "0.3em" }}>
            <i class="fa-solid fa-phone"></i>&nbsp;
            {finalData.phone_number}
          </p>
        </div>
        {localStorage.getItem("about") && <h4>ჩემ შესახებ</h4>}

        <div className="about-container" style={{ marginTop: "1em" }}>
          <p style={{ lineHeight: "22px" }}>{finalData.about_me}</p>
        </div>

        <div className="image-preview">
          {imageUrl && (
            <img
              id="upload-preview"
              style={{ marginTop: "1.1em" }}
              src={localStorage.getItem("image")}
            />
          )}
        </div>
        <hr style={{ marginTop: "3em", border: "1px solid #C8C8C8" }} />
        <p
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            marginBottom: "0.5em",
          }}
        >
          <h4 style={{ paddingTop: "1.5em" }}>გამოცდილება</h4>
          {Object.keys(finalData.experiences).map(
            (key) =>
              finalData.experiences[key] && (
                <div key={key}>
                  {`${finalData.experiences[key].position}${
                    finalData.experiences[key].position && ","
                  } ${finalData.experiences[key].employer}`}

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
                    {`${finalData.experiences[key].start_date}`}{" "}
                    {finalData.experiences[key].start_date && "-"}{" "}
                    {`${finalData.experiences[key].due_date}`}
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
                      {`${finalData.experiences[key].description}`}
                    </p>
                  </div>
                </div>
              )
          )}
          <hr style={{ border: "1px solid #c8c8c8" }} />
        </p>
        <h4 style={{ paddingTop: "1.5em" }}>განათლება</h4>
        {Object.keys(finalData.educations).map(
          (key) =>
            finalData.educations[key] && (
              <div key={key}>
                <p style={{ fontWeight: "bold" }}>{`${
                  finalData.educations[key].institute
                }${finalData.educations[key].institute && ","} ${
                  finalData.educations[key].degree
                }`}</p>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#919191",
                    marginTop: "0.5em",
                  }}
                >
                  {finalData.educations[key].due_date}
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
                    {`${finalData.educations[key].description}`}
                  </p>
                </div>
              </div>
            )
        )}

        <img src={Logo3} className="logo-3-final" />
      </div>
    </>
  );
}
