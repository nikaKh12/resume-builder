import React from "react";

const Phone = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label for={props.className} className="top-label">
        მობილურის ნომერი
      </label>
      {props.validatePhoneSuccess && (
        <i className="fa-sharp fa-solid fa-circle-check" id="correct-phone"></i>
      )}
      {props.validatePhoneSuccess === false && (
        <i class="fa-solid fa-triangle-exclamation" id="incorrect-phone"></i>
      )}
      <i
        class="fa-solid fa-triangle-exclamation"
        id="incorrect-phone"
        style={{ visibility: "hidden" }}
        ref={ref.incorrectPhoneRef}
      ></i>
      <input
        type="text"
        name={props.className}
        placeholder="+995 551 12 34 56"
        ref={ref.phoneRef}
        value={localStorage.getItem("phone")}
        onChange={props.validateNumber}
      ></input>
      <label for="email" className="bottom-label">
        უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
      </label>
    </div>
  );
});

export { Phone };
