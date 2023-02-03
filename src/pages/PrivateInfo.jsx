import React, { useState, useContext } from "react";
import PrivateInfoForm from "../components/PrivateInfoForm";
import { Context } from "../Context/Context";

export default function PrivateInfo() {
  return (
    <div className="private-info">
      <PrivateInfoForm />
      <div className="resume"></div>
    </div>
  );
}
