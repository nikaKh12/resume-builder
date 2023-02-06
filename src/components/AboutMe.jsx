import React from "react";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label for="general-info" className="top-label">
        ჩემ შესახებ (არასავალდებულო)
      </label>
      <textarea
        name="general-info"
        placeholder="ზოგადი ინფო შენ შესახებ"
        value={localStorage.getItem("about")}
        ref={ref.aboutRef}
        onChange={props.validateAbout}
      />
    </div>
  );
});

export { AboutMe };
