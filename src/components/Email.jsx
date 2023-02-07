import React from "react";

const Email = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label
        for={props.className}
        className="top-label"
        style={{
          color: props.validateMailSuccess === false ? "#f02424" : "black",
        }}
      >
        ელ.ფოსტა
      </label>
      <input
        type={props.className}
        name={props.className}
        placeholder="anzorr666@redberry.ge"
        value={localStorage.getItem("mail")}
        ref={ref.mailRef}
        onChange={props.validateMail}
      ></input>
      {props.validateMailSuccess && (
        <i className="fa-sharp fa-solid fa-circle-check" id="correct-mail"></i>
      )}
      {props.validateMailSuccess === false && (
        <i class="fa-solid fa-triangle-exclamation" id="incorrect-mail"></i>
      )}
      <i
        class="fa-solid fa-triangle-exclamation"
        id="incorrect-mail"
        style={{ visibility: "hidden" }}
        ref={ref.incorrectMailRef}
      ></i>
      <label for={props.className} className="bottom-label">
        უნდა მთავრდებოდეს @redberry.ge-ით
      </label>
    </div>
  );
});

export { Email };
