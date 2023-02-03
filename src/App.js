import React from "react";
import HomePage from "./pages/HomePage";
import PrivateInfo from "./pages/PrivateInfo";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/private-info" element={<PrivateInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
