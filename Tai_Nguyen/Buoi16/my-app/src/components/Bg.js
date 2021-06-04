import React, { useState } from "react";
import "./Bg.css";

function Bg({ name = "tai" }) {
  const [className, setClassName] = useState("bgRed");

  return (
    <div>
      <div className={className}>{name}</div>
      <button onClick={() => setClassName("bgGreen")}>Green</button>
      <button onClick={() => setClassName("bgYellow")}>Yellow</button>
      <button onClick={() => setClassName("bgRed")}>Red</button>
    </div>
  );
}

export default Bg;
