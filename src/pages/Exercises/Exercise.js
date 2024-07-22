import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WordForms from "./WordForms";
import TensesExercises from "./TenseExercises";
import AvPvExe from "./AvPvExe";
import RSExe from "./ReportedSpeechExe";
import ConjunctionExe from "./ConjunctionExe";
const Exercises = () => {
  const navigate = useNavigate();
  const { part } = useParams();

  const partContent = {
    WordForms: <WordForms />,
    TensesExercise: <TensesExercises />,
    ActivePassive: <AvPvExe />,
    ReportedSpeech: <RSExe />,
    Conjunction: <ConjunctionExe />,
  };

  const handlePartClick = (part) => {
    navigate(`/exercises/${part}`);
  };
  useEffect(() => {
    if (!part) {
      navigate("/exercises/WordForms");
    }
  }, [part, navigate]);

  return (
    <>
      <div className="left-side-nav">
        <h2 className="notes">Exercises</h2>
        <div className="left-side-nav-items">
          {Object.keys(partContent).map((key) => (
            <button
              className={`inner-left-side-nav ${part === key ? "active" : ""}`}
              key={key}
              style={{ minWidth: "135px" }}
              onClick={() => handlePartClick(key)}>
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className="container">
        <h2>{part}</h2>
        <p> {partContent[part]} </p>
      </div>
    </>
  );
};

export default Exercises;
