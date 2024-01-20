import { useState } from "react";

function App() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (event) => setColor(event.target.value);

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color.toUpperCase()}</p>
      </div>
      <label>Select a color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default App;
