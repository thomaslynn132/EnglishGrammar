import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  WordForms,
  TensesExercises,
  AvPvExe,
  RSExe,
  ConjunctionExe,
} from "../../components/exercises";

const Exercises = () => {
  const navigate = useNavigate();
  const { part } = useParams();

  // const partContent = {
  //   WordForms: <WordForms />,
  //   TensesExercise: <TensesExercises />,
  //   ActivePassive: <AvPvExe />,
  //   ReportedSpeech: <RSExe />,
  //   Conjunction: <ConjunctionExe />,
  // };

  const content = [
    {
      name: "WordForms",
      component: <WordForms />
    },
    {
      name: "TensesExercise",
      component: <TensesExercises />
    },
  ]

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
          {
            content.map((item, index) => (
              <button
                key={index}
                className={`inner-left-side-nav ${part === item ? "active" : ""}`}
                style={{ minWidth: "135px" }}
                onClick={() => handlePartClick(item.name)}>
                {item.name}
              </button>
            ))
          }
        </div>
      </div>
      <div className="container">
        <h2>{part}</h2>
        <p> {content.filter(item => item.name === part)[0].component} </p>
      </div>
    </>
  );
};

export default Exercises;
