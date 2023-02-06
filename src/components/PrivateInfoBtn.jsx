import React from "react";

const PrivateInfoBtn = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <button
        onClick={(event) => {
          event.preventDefault();
          if (!props.validateNameSuccess) {
            ref.nameRef.current.style.border = "1px solid #f02424";
            ref.incorrectNameRef.current.style.visibility = "visible";
          }
          if (!props.validateLastNameSuccess) {
            ref.lastNameRef.current.style.border = "1px solid #f02424";
            ref.incorrectLastNameRef.current.style.visibility = "visible";
          }
          if (!props.validatePictureSuccess) {
            ref.pictureIconRef.current.style.visibility = "visible";
          }
          if (document.getElementById("upload").files[0]) {
            props.setValidatePictureSuccess(true);
          }
          if (!props.validateMailSuccess) {
            ref.mailRef.current.style.border = "1px solid #f02424";
            ref.incorrectMailRef.current.style.visibility = "visible";
          }
          if (!props.validatePhoneSuccess) {
            ref.phoneRef.current.style.border = "1px solid #f02424";
            ref.incorrectPhoneRef.current.style.visibility = "visible";
          }
          if (
            props.validateNameSuccess &&
            props.validateLastNameSuccess &&
            props.validatePictureSuccess &&
            props.validateMailSuccess &&
            props.validatePhoneSuccess
          ) {
            console.log("validated");
          }
        }}
      >
        შემდეგი
      </button>
    </div>
  );
});

export { PrivateInfoBtn };
