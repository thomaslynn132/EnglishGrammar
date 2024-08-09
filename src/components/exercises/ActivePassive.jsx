import React from "react";

const passiveSentences = [
  "Mary baked the cake.",
  "The author wrote the novel.",
  "The committee made a decision.",
  "John typed the letter.",
  "The workers painted the house.",
  "The choir sang a song.",
  "Sarah submitted the report.",
  "My sister drove the car.",
  "The athlete set a new record.",
  "Peter found the keys.",
  "The president delivered a speech.",
  "The messenger conveyed the message.",
  "The students read the book.",
  "The employee made a mistake.",
  "The team won the game.",
  "The scientist found a solution.",
  "Steven Spielberg directed the film.",
  "The storyteller told a story.",
  "The team completed the project.",
  "Mary sent the message.",
  "The child opened the window.",
  "Jane gave a gift.",
  "The CEO signed the document.",
  "The teacher answered the question.",
  "The group reached a decision.",
  "The engineer solved the problem.",
  "The musician composed a song.",
  "The wind closed the window.",
  "The team developed a plan.",
  "John received the message.",
  "The printer printed the document.",
  "The author wrote a story.",
  "The technician fixed the problem.",
  "The actors performed the play.",
  "The manager made a decision.",
  "The child solved the puzzle.",
  "The artist painted a picture.",
  "The student asked the question.",
  "The workers built a bridge.",
  "Susan sent the email.",
  "The board took a decision.",
  "The teacher corrected the mistake.",
  "The photographer took the picture.",
  "The team made a plan.",
  "The workers demolished the building.",
  "The storyteller narrated a story.",
  "The CEO announced the decision.",
  "The child solved the puzzle.",
  "The artist painted a picture.",
];

const activeSentences = [
  "The cake was decorated by the pastry chef.",
  "A song was written by the talented musician.",
  "The decision was approved by the board of directors.",
  "A new software update was installed by the IT department.",
  "The novel was published by the renowned publishing house.",
  "A report was reviewed by the senior analyst.",
  "The presentation was prepared by the marketing team.",
  "The letter was drafted by the secretary.",
  "The package was delivered by the courier.",
  "The movie was produced by the famous film director.",
  "A solution was proposed by the engineering team.",
  "The event was organized by the event planner.",
  "The experiment was conducted by the research team.",
  "The code was written by the software developer.",
  "The problem was identified by the quality control team.",
  "The concert was attended by thousands of fans.",
  "The contract was signed by both parties.",
  "The question was answered by the knowledgeable professor.",
  "The sculpture was created by the talented artist.",
  "The email was sent by the marketing manager.",
  "A decision was made by the city council.",
  "The website was designed by the web development team.",
  "The mistake was acknowledged by the responsible employee.",
  "The virus was detected by the antivirus software.",
  "The message was relayed by the communication officer.",
  "The challenge was overcome by the determined team.",
  "The book was recommended by the literature professor.",
  "The team was led by the experienced captain.",
  "The competition was won by the skilled athlete.",
  "The strategy was formulated by the management team.",
  "The road was constructed by the construction crew.",
  "The task was completed by the diligent employee.",
  "The currency exchange was handled by the bank teller.",
  "The recipe was perfected by the chef.",
  "The problem was fixed by the IT support team.",
  "The rescue operation was executed by the skilled firefighters.",
  "The speech was delivered by the charismatic speaker.",
  "The car was manufactured by the automotive company.",
  "The formula was derived by the mathematician.",
  "The product was tested by the quality assurance team.",
  "The news was reported by the journalist.",
  "The exam was passed by the diligent student.",
  "The decision was influenced by the persuasive argument.",
  "The recipe was followed by the home cook.",
  "The award was received by the talented actress.",
  "The document was translated by the bilingual translator.",
  "The project was initiated by the visionary leader.",
  "The agreement was reached by both negotiating parties.",
  "The puzzle was solved by the clever teenager.",
  "The email was sent by the responsive colleague.",
];

export default function AvPvExe() {
  return (
    <div>
      <h3>Change the following sentences into passive voice.</h3>
      <ol>
        {passiveSentences.map((sentence, index) => (
          <li key={index}>
            {sentence}
            <br /> <br />
          </li>
        ))}
      </ol>
      <h3>Change the following sentences into active voice.</h3>
      <ol>
        {activeSentences.map((sentence, index) => (
          <li key={index}>
            {sentence} <br /> <br />
          </li>
        ))}
      </ol>
    </div>
  );
}
