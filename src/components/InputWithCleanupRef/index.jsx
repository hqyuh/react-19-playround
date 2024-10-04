import { useState } from "react";

function InputWithCleanup() {
  const [showInput, setShowInput] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={() => setShowInput(!showInput)}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
      >
        Toggle Input
      </button>

      {showInput && (
        <input
          ref={(ref) => {
            if (ref) {
              console.log("Input element attached to the DOM.");

              const handleFocus = () => {
                console.log("Input is focused.");
              };

              ref.addEventListener("focus", handleFocus);

              // NEW: Check if ref is null during cleanup
              return () => {
                console.log("Cleanup function triggered.");
                console.log("Ref is null?", ref);
                ref.removeEventListener("focus", handleFocus);
                console.log("Cleanup focus event listener");
              };
            }
          }}
          placeholder="Type something"
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
        />
      )}
    </div>
  );
}

export default InputWithCleanup;
