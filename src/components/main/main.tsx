import { log } from "console";
import React, { useState } from "react";

function Main() {
  let [color, setColor] = useState<String>("");

  const generateRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    let shade = "#";
    for (let i = 0; i < 6; i++) {
      shade += letters[Math.floor(Math.random() * 16)];
    }
    return shade;
  };
  function saver() {
    sessionStorage.setItem(`${color}`, `${color}`);
    // console.log(sessionStorage.getItem("color"));
  }

  return (
    <div style={{ background: `${color}` }} className="halfScreen">
      <button
        className="bgChanger"
        onClick={() => {
          const newColor = generateRandomColor();
          setColor(newColor);
        }}
      >
        Change Background
      </button>
      <button onClick={saver} className="SaveButton" type="button">
        save
      </button>
      <p className="color">{color}</p>
    </div>
  );
}

export default Main;
