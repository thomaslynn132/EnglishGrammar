import React from "react";
import Home from "../../components/Home";
import { useState } from "react";
import WordForms from "./WordForms";
import TensesExercises from "./TenseExercises";
import AvPvExe from "./AvPvExe";
import RSExe from "./ReportedSpeechExe";
import ConjunctionExe from "./ConjunctionExe";
const Exercises = () => {
  const [selectedPart, setSelectedPart] = useState(<Home />);
  const handlePartClick = (part) => {
    setSelectedPart(part);
  };
  const partContent = {
    WordForms: <WordForms />,
    TensesExercise: <TensesExercises />,
    ActivePassive: <AvPvExe />,
    ReportedSpeech: <RSExe />,
    Conjunction: <ConjunctionExe />,
  };

  return (
    <>
      <div className="left-side-nav">
        <h2 className="notes">Exercises</h2>
        {Object.keys(partContent).map((part) => (
          <button
            className={`inner-left-side-nav ${
              selectedPart === part ? "active" : ""
            }`}
            key={part}
            onClick={() => handlePartClick(part)}>
            {part}
          </button>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <h2>{selectedPart}</h2>
        <p> {partContent[selectedPart]} </p>
      </div>
    </>
  );
};

export default Exercises;
