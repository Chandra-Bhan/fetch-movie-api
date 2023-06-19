import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F4FE" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
