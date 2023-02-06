import React from "react";

export default function FormHeader({ title, count }) {
  return (
    <div className="private-info-form-header">
      <h2 id="private-info-title">{title}</h2>
      <h2 id="numeration">{count}/3</h2>
    </div>
  );
}
