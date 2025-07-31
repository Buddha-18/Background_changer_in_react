import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <body style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setcolor("red");
            }}
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => {
              setcolor("green");
            }}
            className="outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => {
              setcolor("blue");
            }}
            className="outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => {
              setcolor("yellow");
            }}
            className="outline-none px-4 text-black shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >
            Blue
          </button>

          <button
            onClick={() => {
              setcolor("orange");
            }}
            className="outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "orange" }}
          >
            Blue
          </button>

          <button
            onClick={() => {
              setcolor("skyblue");
            }}
            className="outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "skyblue" }}
          >
            Blue
          </button>

          <button
            onClick={() => {
              setcolor("purple");
            }}
            className="outline-none px-4 text-white shadow-lg "
            style={{ backgroundColor: "purple" }}
          >
            Blue
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
