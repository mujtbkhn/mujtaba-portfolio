"use client";
import React, { useState } from "react";

const DownloadCV = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const fileURL = "/MUJTABA CV.pdf";
    const link = document.createElement("a");
    link.href = fileURL;
    link.setAttribute("download", "MUJTABA KHAN CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row justify-center items-center gap-4 mt-10"
      >
        <input
          type="email"
          required
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Please enter your email"
          className="p-2 rounded-md w-48 md:w-96 text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 w-40 md:w-48 md:text-base text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Download resume
        </button>
      </form>
    </div>
  );
};

export default DownloadCV;
