import React, { useState, useContext } from "react";
import ExperienceForm from "../components/ExperienceForm";
import Resume from "../components/Resume";
import { Context } from "../Context/Context";

export default function Education() {
  return (
    <div className="education">
      <ExperienceForm />
      <Resume />
    </div>
  );
}
