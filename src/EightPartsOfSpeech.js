import React, { useState } from "react";
import "./App.css";
import Home from "./Home.jsx";
import Noun from "./Noun";

const EightPartsOfSpeech = () => {
  const [selectedPart, setSelectedPart] = useState(<Home />);

  const handlePartClick = (part) => {
    setSelectedPart(part);
  };

  const partContent = {
    Noun: <Noun />,
    Pronoun: "Pronouns are used to replace nouns to avoid repetition.",
    Adjective: "Adjectives describe or modify nouns.",
    Verb: "Verbs are action words that show what the subject is doing.",
    Adverb: "Adverbs modify verbs, adjectives, and other adverbs.",
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
