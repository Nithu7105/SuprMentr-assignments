import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  const handleMood = (selectedMood) => {
    setMood(selectedMood);
  };

  return (
    <div className="container">
      <h1>Mood Tracker 😊</h1>

      <div className="buttons">
        <button onClick={() => handleMood("Happy")}>😊 Happy</button>
        <button onClick={() => handleMood("Sad")}>😢 Sad</button>
        <button onClick={() => handleMood("Excited")}>🤩 Excited</button>
        <button onClick={() => handleMood("Angry")}>😡 Angry</button>
      </div>

      {mood && (
        <h2 className="result">
          You are feeling: <span>{mood}</span>
        </h2>
      )}
    </div>
  );
}

export default App;