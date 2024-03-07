import { useState } from "react";

function ColorPicker() {
  /* destructring element and setter function */
  const [color, setColor] = useState("#ffffff");

  /* a function to handle color picker */
  function handleColorPicker(event) {
    setColor(event.target.value);
  }

  return (
    <div className="container-color-picker">
      <h1>Color Picker</h1>

      <div className="display-color" style={{ backgroundColor: color }}>
        <p>Selected color: {color}</p>

      </div>
        <label>Select a color: </label>
        <input type="color" value={color} onChange={handleColorPicker} />
    </div>
  );
}

export default ColorPicker;
