import React, { useState, useContext } from "react";
import PrivateInfoForm from "../components/PrivateInfoForm";
import ExperienceForm from "../components/ExperienceForm";
import Resume from "../components/Resume";
import { Context } from "../Context/Context";

export default function Experience() {
  return (
    <div className="experience">
      <ExperienceForm />
      <Resume />
    </div>
  );
}
