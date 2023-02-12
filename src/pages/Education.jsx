import React, { useState, useContext } from "react";
import EducationForm from "../components/EducationForm";
import Resume from "../components/Resume";
import { Context } from "../Context/Context";

export default function Education() {
  return (
    <div className="education">
      <EducationForm />
      <Resume />
    </div>
  );
}
