import React, { useContext } from "react";
import { Context } from "../Context/Context";

const PrivatePicture = React.forwardRef((props, ref) => {
  const { formData, setFormData, dataObj, setDataObj } = useContext(Context);
  return (
    <div className={props.className}>
      <h3
        ref={ref.pictureRef}
        style={{ color: props.validatePictureSuccess ? "#f02424" : "black" }}
      >
        პირადი ფოტოს ატვირთვა
      </h3>
      <input
        type="file"
        id="upload"
        name="upload"
        accept="image/*"
        onChange={(e) => {
          let output = document.getElementById("upload-preview");
          output.src = URL.createObjectURL(e.target.files[0]);
          const image = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = () => {
            ref.pictureIconRef.current.style.visibility = "hidden";
            if (e.target.files[0].type) {
              props.setValidatePictureSuccess(true);
            } else {
              props.setValidatePictureSuccess(false);
            }
            let result = reader.result;
            localStorage.setItem("image", result);
            setFormData({
              ...formData,
              photo: result,
            });
            setDataObj({
              ...dataObj,
              image: result,
            });
          };
        }}
        style={{ display: "none" }}
      />
      <i
        class="fa-solid fa-triangle-exclamation"
        id="incorrect-picture"
        ref={ref.pictureIconRef}
        style={{ visibility: "hidden" }}
      ></i>
      <label className="upload-label" for="upload">
        ატვირთვა
      </label>
    </div>
  );
});

export { PrivatePicture };
