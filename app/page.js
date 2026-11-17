"use client";

import { useState } from "react";
import "./Calculator.css"; // 👈 Alag wali CSS file yahan jod di

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (val) => {
    setInput(input + val);
  };

  const calculate = () => {
    try {
      setResult(String(eval(input)));
    } catch {
      setResult("Error");
    }
  };

  const clearAll = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calc-box">
      {/* Screen */}
      <div className="screen">
        <p>{input || "0"}</p>
        <h2>{result || "0"}</h2>
      </div>

      {/* Buttons */}
      <div className="btn-grid">
        {["7", "8", "9"].map((num) => (
          <button key={num} onClick={() => handlePress(num)}>{num}</button>
        ))}
        <button className="btn-operator" onClick={() => handlePress("/")}>/</button>

        {["4", "5", "6"].map((num) => (
          <button key={num} onClick={() => handlePress(num)}>{num}</button>
        ))}
        <button className="btn-operator" onClick={() => handlePress("*")}>*</button>

        {["1", "2", "3"].map((num) => (
          <button key={num} onClick={() => handlePress(num)}>{num}</button>
        ))}
        <button className="btn-operator" onClick={() => handlePress("-")}>-</button>

        <button className="btn-clear" onClick={clearAll}>C</button>
        <button onClick={() => handlePress("0")}>0</button>
        <button className="btn-equal" onClick={calculate}>=</button>
        <button className="btn-operator" onClick={() => handlePress("+")}>+</button>
      </div>
    </div>
  );
}