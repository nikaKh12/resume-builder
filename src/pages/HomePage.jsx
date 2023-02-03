import React from "react";
import Logo from "../images/logo.png";
import Logo2 from "../images/logo-2.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
      <img src={Logo2} alt="logo-2" className="logo-2" />
      <header>
        <img src={Logo} alt="logo" className="home-logo" />
        <hr />
      </header>
      <main className="home-main">
        <Link to="/private-info">
          <button className="add-resume">რეზიუმეს დამატება</button>
        </Link>
      </main>
    </div>
  );
}
