import React, { useState } from "react";

export default function Popup() {
  const [closePopup, setClosePopup] = useState(false);
  const handleClick = () => {
    setClosePopup(true);
  };
  return (
    <div className={closePopup ? "popup popup-hidden" : "popup"}>
      <i className="fa-solid fa-x close-popup" onClick={handleClick}></i>
      <h1>რეზიუმე წარმატებით გაიგზავნა 🎉</h1>
    </div>
  );
}
