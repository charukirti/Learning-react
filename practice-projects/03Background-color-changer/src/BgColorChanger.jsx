import { useState } from "react";

function generateRandomColor() {
  let color = "#";
  const letters = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function BgColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  function handleColorChange() {
    setBackgroundColor(generateRandomColor);
  }

  return (
    <div className="container" style={{ backgroundColor }}>
      <button className="btn" onClick={handleColorChange}>
        Click me to change background
      </button>
    </div>
  );
}

export default BgColorChanger;
