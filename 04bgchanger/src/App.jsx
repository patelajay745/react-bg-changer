import { useState, useEffect } from "react";

function App() {
  //  const [color, setColor] = useState("green");
  const [color, setColor] = useState(() => {
    return localStorage.getItem("backgroundColor") || "green";
  });

  // Use useEffect to update localStorage whenever the color state changes
  useEffect(() => {
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-end items-center inset-y-0 right-0 px-2">
        <div className="flex flex-col justify-start gap-4 shadow-lg bg-white rounded-lg px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 outline-none rounded-md text-white shadow-lg p-4"
          >
            Red
          </button>
          <button
            onClick={() => setColor("Green")}
            className="bg-green-500 outline-none rounded-md text-white shadow-lg p-4"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 outline-none rounded-md text-white shadow-lg p-4"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="bg-orange-500 outline-none rounded-md text-white shadow-lg p-4"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-500 outline-none rounded-md text-white shadow-lg p-4"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="bg-pink-900 outline-none rounded-md text-white shadow-lg p-4"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("violet")}
            className="bg-violet-500 outline-none rounded-md text-white shadow-lg p-4"
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
