import React from "react";
import { bucketList } from "./items";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Miami Bucket List
      </h1>
      <ul className="max-w-lg mx-auto space-y-4">
        {bucketList.map((item, idx) => (
          <li
            key={idx}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            {idx + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
