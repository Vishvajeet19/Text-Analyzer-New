import React, { useState } from "react";

export default function TextAnalyzer() {
  const [text, setText] = useState("");

  // Handlers
  const handleTextChange = (newText) => setText(newText);

  const handleUpperCase = () => handleTextChange(text.toUpperCase());
  const handleLowerCase = () => handleTextChange(text.toLowerCase());
  const handleClearText = () => handleTextChange("");
  const handleCopyText = () => navigator.clipboard.writeText(text);
  const handleRemoveSpaces = () =>
    handleTextChange(text.split(/\s+/).join(" ").trim());
  const handleOnChange = (event) => handleTextChange(event.target.value);

  // Button classes
  const buttonClass =
    "border border-black text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";

  return (
    <>

      <div className="container mx-auto p-6 my-12 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
        <div className="mb-8">
          <label
            htmlFor="large-textarea"
            className="block mb-3 font-extrabold text-3xl text-gray-800 dark:text-white">
            Enter Text to Analyze
          </label>
          <textarea
            id="large-textarea"
            value={text}
            onChange={handleOnChange}
            className="border border-gray-300 rounded-lg w-full p-4 h-64 text-gray-900 text-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            placeholder="Type your text here..."
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={handleUpperCase}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-300 transition duration-300">
            To Upper Case
          </button>
          <button
            onClick={handleLowerCase}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:ring focus:ring-purple-300 transition duration-300">
            To Lower Case
          </button>
          <button
            onClick={handleClearText}
            className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:ring focus:ring-red-300 transition duration-300">
            Clear Text
          </button>
          <button
            onClick={handleCopyText}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:ring focus:ring-green-300 transition duration-300">
            Copy Text
          </button>
          <button
            onClick={handleRemoveSpaces}
            className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 focus:ring focus:ring-yellow-300 transition duration-300">
            Remove Extra Spaces
          </button>
        </div>

        {/* Text Summary */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <h1 className="font-extrabold text-3xl mb-6 underline text-gray-800 dark:text-white">
            Your Text Summary
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            <strong>{text.split(/\s+/).filter(Boolean).length}</strong> words
            and <strong>{text.length}</strong> characters.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            <strong>
              {(0.008 * text.split(/\s+/).filter(Boolean).length).toFixed(2)}
            </strong>{" "}
            Minutes to read.
          </p>
          <h3 className="font-bold text-2xl mt-8 mb-4 text-gray-800 dark:text-white">
            Preview
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {text || "Enter text above to preview here."}
          </p>
        </div>
      </div>
    </>
  );
}