import React, { useState } from "react";
import "./App.css";
import Home from "./Home.jsx";
import Noun from "./Noun";
import Pronoun from "./Pronoun";
import Adjective from "./Adjective";
import Verb from "./Verb.jsx";
import Tenses from "./Tenses.jsx";
import Adverb from "./Adverb.jsx";
import Preposition from "./Preposition.jsx";
import Determiners from "./Determiners.jsx";
import Conjunction from "./Conjunction.jsx";
import Inrerjection from "./Interjection.jsx";
import Punctuation from "./Punctuation.jsx";

const EightPartsOfSpeech = () => {
  const [selectedPart, setSelectedPart] = useState(<Home />);
  const handlePartClick = (part) => {
    setSelectedPart(part);
  };
  const partContent = {
    Noun: <Noun />,
    Pronoun: <Pronoun />,
    Adjective: <Adjective />,
    Determiners: <Determiners />,
    Verb: <Verb />,
    Tenses: <Tenses />,
    Adverb: <Adverb />,
    Preposition: <Preposition />,
    Conjunction: <Conjunction />,
    Interjection: <Inrerjection />,
    Punctuation: <Punctuation />,
  };

  return (
    <>
      <div className="left-side-nav">
        <h4>Eight Parts Of Speech</h4>
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
      <div className="container">
        <h3>{selectedPart}</h3>
        <p> {partContent[selectedPart]} </p>
      </div>
    </>
  );
};

export default EightPartsOfSpeech;
