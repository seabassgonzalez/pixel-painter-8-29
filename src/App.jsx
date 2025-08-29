import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ff0000");
  const [border, setBorder] = useState(false);
  const [squares, setSquares] = useState(
    Array.from({ length: 100 }).map((_) => {
      return { color: "white" };
    })
  );

  const clickHandler = (index) => {
    let currentSquares = structuredClone(squares);
    currentSquares[index].color = color;
    setSquares(currentSquares);
  };

  const clickRemoveBorders = () => {
    setBorder(!border);
  };

  const mouseUpHandler = () => {
    console.log("trigger mouse up");
  };

  return (
    <>
      <p>React code goes here</p>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={clickRemoveBorders}>Remove Borders</button>
      <div className="grid">
        {squares.map((square, i) => (
          <div
            key={i}
            style={{ backgroundColor: `${square.color}` }}
            className={`square ${border ? "clearSquare" : ""}`}
            onClick={() => clickHandler(i)}
            onDragStart={() => {
              clickHandler(i);
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
