import React from "react";
import { useNavigate } from "react-router-dom";

function Home () {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/about");
  };

  return (
    <>
      <p> This is the HOME page</p>
      <button onClick={handleclick}>Quickly friend! TO THE ABOW..ABOUT PAGE!</button>
    </>
  );
}

export default Home;