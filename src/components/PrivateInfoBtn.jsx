import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { setBorder, setVisibility } from "../helper/Helper";
import { Link, useNavigate } from "react-router-dom";

const PrivateInfoBtn = React.forwardRef((props, ref) => {
  const { privateInfoValidated, setPrivateInfoValidated } = useContext(Context);
  const navigate = useNavigate();
  const handleClick = (event) => {
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
      setPrivateInfoValidated(true);
      navigate("/experience");
    }
  };
  return (
    <div className={props.className}>
      <button onClick={handleClick}>შემდეგი</button>
    </div>
  );
});

export { PrivateInfoBtn };
