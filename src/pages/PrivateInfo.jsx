import React, { useState, useContext } from "react";
import PrivateInfoForm from "../components/PrivateInfoForm";
import Resume from "../components/Resume";
import { Context } from "../Context/Context";

export default function PrivateInfo() {
  return (
    <div className="private-info">
      <PrivateInfoForm />
      <Resume />
    </div>
  );
}
