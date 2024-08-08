import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Noun,
  Pronoun,
  Adjective,
  Verb,
  Tenses,
  Adverb,
  Preposition,
  Determiners,
  Conjunction,
  Interjection,
  Punctuation,
  ActivePassive,
  ReportedSpeech,
} from "../Myanmar";
const Notes = () => {
  const { part } = useParams();
  const navigate = useNavigate();

  const partContent = [
    { name: "Noun", component: <Noun /> },
    { name: "Pronoun", component: <Pronoun /> },
    { name: "Adjective", component: <Adjective /> },
    { name: "Determiners", component: <Determiners /> },
    { name: "Verb", component: <Verb /> },
    { name: "Tenses", component: <Tenses /> },
    { name: "Adverb", component: <Adverb /> },
    { name: "Preposition", component: <Preposition /> },
    { name: "Conjunction", component: <Conjunction /> },
    { name: "Interjection", component: <Interjection /> },
    { name: "Punctuation", component: <Punctuation /> },
    { name: "Active Passive", component: <ActivePassive /> },
    { name: "Reported Speech", component: <ReportedSpeech /> },
  ];

  const handlePartClick = (part) => {
    navigate(`/notes/${part}`);
  };

  useEffect(() => {
    if (!part) {
      navigate("/notes/Noun");
    }
  }, [part, navigate]);
  const selectedItem = partContent.find((item) => item.name === part);

  return (
    <>
      <div className="left-side-nav">
        <h1 className="notes">Notes</h1>
        <div className="left-side-nav-items">
          {partContent.map((item, index) => (
            <button
              className={`inner-left-side-nav ${
                part === item.name ? "active" : ""
              }`}
              key={index}
              style={{ minWidth: "120px" }}
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

export default Notes;
