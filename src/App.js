import React, { useEffect, useState } from "react";
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Error from "./Components/Errorpage"

function App() {
  return (

    <>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Header />
            <About />
          </>
        }
      />

      <Route path="*" element={
        <>
          <Error />
        </>
        }
        />
    </Routes>
  </>)
}

export default App;
