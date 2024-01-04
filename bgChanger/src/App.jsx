import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive")
  const handleClick = (event) => {
    setColor(event.target.style.backgroundColor)
  }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="w-full bottom-12 inset-x-0 px-2 mx-auto bg-gray-700 fixed flex flex-wrap   justify-around p-3 gap-2 rounded-xl box-border">
        <button
          onClick={handleClick}
          className="rounded-xl px-6 py-2 hover:border-4 hover:border-black box-content"
          style={{backgroundColor:"red"}}
        >
          Red
        </button>
        <button
          onClick={handleClick}
          className = "rounded-xl px-6 py-2 hover:border-4 hover:border-black box-content"
          style={{backgroundColor:"blue"}}
        >
          Blue
        </button>
        <button
          onClick={handleClick}
          className="rounded-xl px-6 py-2 hover:border-4 hover:border-black box-content"
          style={{backgroundColor:"green"}}
        >
          Green
        </button>
        <button
          onClick={handleClick}
          className="rounded-xl px-6 py-2 hover:border-4 hover:border-black box-content"
          style={{backgroundColor:"darkorange"}}
        >
          Orange
        </button>
        <button
          onClick={handleClick}
          className="rounded-xl px-6 py-2 hover:border-4 hover:border-black box-content"
          style={{backgroundColor:"darkviolet"}}
        >
          Violet
        </button>
        <button
          onClick={handleClick}
          className="rounded-xl px-6 py-2 hover:border-4 hover:border-black box-content"
          style={{backgroundColor:"yellow"}}
        >
          Yellow
        </button>

        <button
          onClick={handleClick}
          className="rounded-xl px-6 py-2 hover:border-4 hover:border-black box-content"
          style={{backgroundColor:"magenta"}}
        >
          Magenta
        </button>
      </div>
    </div>
  );
}

export default App;
