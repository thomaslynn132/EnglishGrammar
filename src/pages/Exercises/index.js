import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  WordForms,
  TensesExercises,
  AvPvExe,
  RSExe,
  ConjunctionExe,
} from "../../components/exercises";
import { Helmet } from "react-helmet";
const Exercises = () => {
  const navigate = useNavigate();
  const { part } = useParams();

  const partContent = [
    { name: "Word Forms", component: <WordForms /> },
    { name: "Tenses", component: <TensesExercises /> },
    { name: "Active Passive", component: <AvPvExe /> },
    { name: "Reported Speech", component: <RSExe /> },
    { name: "Conjunction", component: <ConjunctionExe /> },
  ];

  const handlePartClick = (partName) => {
    navigate(`/exercises/${partName}`);
  };

  useEffect(() => {
    if (!part) {
      navigate("/exercises/Word Forms");
    }
  }, [part, navigate]);

  const selectedItem = partContent.find((item) => item.name === part);

  return (
    <>
      <Helmet>
        <title>{selectedItem?.name}</title>
      </Helmet>
      <div className="left-side-nav">
        <h2 className="notes">Exercises</h2>
        <div className="left-side-nav-items">
          {partContent.map((item, index) => (
            <button
              key={index}
              className={`inner-left-side-nav ${
                part === item.name ? "active" : ""
              }`}
              style={{ minWidth: "135px" }}
              onClick={() => handlePartClick(item.name)}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="container">
        <h2>{selectedItem?.name}</h2>
        <div>{selectedItem?.component}</div>
      </div>
    </>
  );
};

export default Exercises;
