import { useState } from "react";
import "./App.css";
import image1 from "./images/empty.png";
import image2 from "./images/diag_fullempty.png";
import image3 from "./images/emptyfull.png";
import image4 from "./images/diag_4_emptyfull.png";
import image5 from"./images/diag_4_fullempty.png";
import image6 from "./images/4_emptyfull.png";

function App() {
  const imageTable = [
    { id: "0", src: image1 },
    { id: "11", src: image2 },
    { id: "10", src: image3 },
    { id: "22", src: image4 },
    { id: "21", src: image5 },
    { id: "20", src: image6 },
  ]

  const [X, setX] = useState(null);
  const [Y, setY] = useState(null);
  const [Z, setZ] = useState(null);
  const [solution, setSolution] = useState("");

  function handleX(id){
    setX(id);
  }

  function handleY(id){
    setY(id);
  }

  function handleZ(id){
    setZ(id);
  }

  function handleSubmit(){
    if (X && Y && Z) {
      let solve = "";

      solve = solve + (2 * parseInt(X) + 11) + " ";
      solve = solve + ((2 * parseInt(Z) + parseInt(Y)) - 5) + " ";
      solve = solve + Math.abs((parseInt(Y) + parseInt(Z)) - X);

      setSolution(solve);
    } else {
      setSolution("Please select X, Y and Z first.");
    }

  }

  return (
    <div>
      <h1>Terminus Code Solver</h1>
      <h2>Select the images for X, Y and Z</h2>

      <div className="full-selection">

        <div className="variable-selection">
          <h2>X</h2>
          <div className="image-selection">
            {imageTable.map(image => (
              <label key={image.id} className="image-option">
                <input 
                  type="radio"
                  name="X"
                  value={image.id}
                  checked={X === image.id}
                  onChange={() => handleX(image.id)}
                />
                <img 
                  src={image.src}
                  className={`image ${X === image.id ? "selected" : ""}`}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="variable-selection">
          <h2>Y</h2>
          <div className="image-selection">
            {imageTable.map(image => (
              <label key={image.id} className="image-option">
                <input 
                  type="radio"
                  name="Y"
                  value={image.id}
                  checked={Y === image.id}
                  onChange={() => handleY(image.id)}
                />
                <img 
                  src={image.src}
                  className={`image ${Y === image.id ? "selected" : ""}`}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="variable-selection">
          <h2>Z</h2>
          <div className="image-selection">
            {imageTable.map(image => (
              <label key={image.id} className="image-option">
                <input 
                  type="radio"
                  name="Z"
                  value={image.id}
                  checked={Z === image.id}
                  onChange={() => handleZ(image.id)}
                />
                <img 
                  src={image.src}
                  className={`image ${Z === image.id ? "selected" : ""}`}
                />
              </label>
            ))}
          </div>
        </div>

        <button className="solve-button" onClick={handleSubmit}>Solve</button>
        {solution &&<div className="solution-display">{solution}</div>}

      </div>
    </div>
  );
}

export default App;
