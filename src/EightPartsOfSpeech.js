import React, { useState } from "react";
import "./App.css";
import Home from "./Home.jsx";
import Noun from "./Noun";
import Pronoun from "./Pronoun";
import Adjective from "./Adjective";
import Verb from "./Verb.jsx";
import Tenses from "./Tenses.jsx";
const EightPartsOfSpeech = () => {
  const [selectedPart, setSelectedPart] = useState(<Home />);
  const [isActive, setIsActive] = useState("inner-left-side-nav");
  const handlePartClick = (part) => {
    setSelectedPart(part);
    setIsActive("activeBtn");
  };
  const partContent = {
    Noun: <Noun />,
    Pronoun: <Pronoun />,
    Adjective: <Adjective />,
    Verb: <Verb />,
    Tenses: <Tenses />,
    Adverb: "Adverbs",
    Preposition:
      "Prepositions show the relationship between a noun and other words in a sentence.",
    Conjunction: "Conjunctions connect words, phrases, or clauses.",
    Interjection: "Interjections express strong feelings or emotions.",
  };

  return (
    <>
      <div className="left-side-nav">
        <h4>Eight Parts Of Speech</h4>
        {Object.keys(partContent).map((part) => (
          <button
            className="inner-left-side-nav"
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
