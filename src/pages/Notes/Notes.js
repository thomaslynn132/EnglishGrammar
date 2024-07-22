import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Noun from "./Noun.jsx";
import Pronoun from "./Pronoun.jsx";
import Adjective from "./Adjective.jsx";
import Verb from "./Verb.jsx";
import Tenses from "./Tenses.jsx";
import Adverb from "./Adverb.jsx";
import Preposition from "./Preposition.jsx";
import Determiners from "./Determiners.jsx";
import Conjunction from "./Conjunction.jsx";
import Interjection from "./Interjection.jsx";
import Punctuation from "./Punctuation.jsx";
import ActivePassive from "./ActivePassive.jsx";
import ReportedSpeech from "./ReportedSpeech.jsx";

const Notes = () => {
  const { part } = useParams();
  const navigate = useNavigate();

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
    Interjection: <Interjection />,
    Punctuation: <Punctuation />,
    ActivePassive: <ActivePassive />,
    ReportedSpeech: <ReportedSpeech />,
  };

  const handlePartClick = (part) => {
    navigate(`/notes/${part}`);
  };

  useEffect(() => {
    if (!part) {
      navigate("/notes/Noun");
    }
  }, [part, navigate]);

  return (
    <>
      <div className="left-side-nav">
        <h1 className="notes">Notes</h1>
        <div className="left-side-nav-items">
          {" "}
          {Object.keys(partContent).map((key) => (
            <button
              className={`inner-left-side-nav ${part === key ? "active" : ""}`}
              key={key}
              style={{ minWidth: "120px" }}
              onClick={() => handlePartClick(key)}>
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className="container">
        <h2>{part}</h2>
        <div>{partContent[part]}</div>
      </div>
    </>
  );
};

export default Notes;
