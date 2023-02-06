import React from "react";
import { setBorder, setVisibility } from "../helper/Helper";

const PrivateInfoBtn = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <button
        onClick={(event) => {
          event.preventDefault();
          if (!props.validateNameSuccess) {
            setBorder(ref.nameRef, "1px solid #f02424");
            setVisibility(ref.incorrectNameRef, "visible");
          }
          if (!props.validateLastNameSuccess) {
            setBorder(ref.lastNameRef, "1px solid #f02424");
            setVisibility(ref.incorrectLastNameRef, "visible");
          }
          if (!props.validatePictureSuccess) {
            setVisibility(ref.pictureIconRef, "visible");
          }
          if (document.getElementById("upload").files[0]) {
            props.setValidatePictureSuccess(true);
          }
          if (!props.validateMailSuccess) {
            setBorder(ref.mailRef, "1px solid #f02424");
            setVisibility(ref.incorrectMailRef, "visible");
          }
          if (!props.validatePhoneSuccess) {
            setBorder(ref.phoneRef, "1px solid #f02424");
            setVisibility(ref.incorrectPhoneRef, "visible");
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
