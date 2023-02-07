import React from "react";

const InputField = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label
        for={props.className}
        className="top-label"
        style={{ color: props.validateSuccess === false ? "#f02424" : "black" }}
      >
        {props.title}
      </label>
      <input
        type="text"
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
        name={props.className}
        ref={ref.nameRef || ref.lastNameRef}
        onChange={props.onChange}
      />
      {props.validateSuccess && (
        <i className="fa-sharp fa-solid fa-circle-check" id="correct-name"></i>
      )}
      {props.validateSuccess === false && (
        <i class="fa-solid fa-triangle-exclamation" id="incorrect-name"></i>
      )}
      <i
        class="fa-solid fa-triangle-exclamation"
        id="incorrect-name"
        ref={ref.incorrectNameRef || ref.incorrectLastNameRef}
        style={{ visibility: "hidden" }}
      ></i>

      <label for={props.className} className="bottom-label">
        {props.label}
      </label>
    </div>
  );
});

export { InputField };
