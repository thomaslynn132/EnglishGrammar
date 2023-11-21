import React, { useState } from "react";
import Home from "../../Home.jsx";
import Noun from "./Noun.jsx";
import Pronoun from "./Pronoun.jsx";
import "./App.css";
import Adjective from "./Adjective.jsx";
import Verb from "./Verb.jsx";
import Tenses from "./Tenses.jsx";
import Adverb from "../../Adverb.jsx";
import Preposition from "./Preposition.jsx";
import Determiners from "./Determiners.jsx";
import Conjunction from "./Conjunction.jsx";
import Inrerjection from "./Interjection.jsx";
import Punctuation from "./Punctuation.jsx";
import ActivePassive from "./ActivePassive.jsx";
import ReportedSpeech from "./ReportedSpeech.jsx";
const Notes = () => {
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
    ActivePassive: <ActivePassive />,
    ReportedSpeech: <ReportedSpeech />,
  };

  return (
    <>
      <div className="left-side-nav">
        <h2 className="notes">Notes</h2>
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
        <h2>{selectedPart}</h2>
        <div> {partContent[selectedPart]} </div>
      </div>
    </>
  );
};

export default Notes;
