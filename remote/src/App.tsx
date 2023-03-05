import { useState } from "react";
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h1 className="text-lg"> I'm a remote React app using Tailwind CSS </h1>
      <p className="text-gray-600">Count: {count}</p>
      <button
        className="bg-gray-800 text-white p-2"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
