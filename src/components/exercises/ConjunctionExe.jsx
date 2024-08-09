import React from "react";

export default function ConjunctionExe() {
  const exercises = {
    coordinating: [
      { sentence: "She likes to read. (and) She enjoys hiking." },
      { sentence: "I'll visit the museum. (or) I'll go to the zoo." },
      {
        sentence: "He wants to go to the party. (but) He has a test tomorrow.",
      },
      { sentence: "She doesn't like coffee. (nor) She likes tea." },
      { sentence: "The sun was shining. (and) The birds were singing." },
      { sentence: "I'll have pasta for dinner. (or) I'll order pizza." },
      { sentence: "He wants to come. (but) He has a meeting." },
      { sentence: "She doesn't like to swim. (nor) She likes to surf." },
      {
        sentence: "The concert was amazing. (and) The crowd was enthusiastic.",
      },
      { sentence: "I'll study chemistry. (or) I'll study physics." },
      { sentence: "She loves chocolate. (but) She's on a diet." },
      { sentence: "He can't dance. (nor) He can't sing." },
      { sentence: "The movie was long. (and) It was boring." },
      { sentence: "We can watch a movie. (or) We can play board games." },
      { sentence: "I want to go out. (but) I have work to finish." },
      { sentence: "The weather was hot. (and) The sky was clear." },
      { sentence: "I'll have a salad. (or) I'll have a sandwich." },
      { sentence: "He is talented. (but) He is lazy." },
      { sentence: "She doesn't eat meat. (nor) She doesn't eat fish." },
      { sentence: "The party was lively. (and) The music was great." },
      { sentence: "I'll buy a car. (or) I'll buy a motorcycle." },
      { sentence: "She loves hiking. (but) She hates bugs." },
      { sentence: "He can't swim. (nor) He can't dive." },
      {
        sentence: "The book was interesting. (and) The movie was entertaining.",
      },
      { sentence: "I'll go to the gym. (or) I'll go for a run." },
      { sentence: "She wants to travel. (but) She has no money." },
      { sentence: "He doesn't like math. (nor) He doesn't like science." },
      { sentence: "The food was delicious. (and) The service was excellent." },
      {
        sentence: "I'll have a cup of coffee. (or) I'll have a glass of juice.",
      },
      { sentence: "She is friendly. (but) She is shy." },
      { sentence: "She can't ski. (nor) She can't snowboard." },
      { sentence: "The play was funny. (and) The actors were talented." },
      { sentence: "I'll wear a dress. (or) I'll wear pants." },
      { sentence: "He is smart. (but) He is forgetful." },
      { sentence: "The beach was beautiful. (and) The water was clear." },
      { sentence: "I'll have soup. (or) I'll have salad." },
      { sentence: "She is optimistic. (but) She is realistic." },
      { sentence: "The game was exciting. (and) The crowd was cheering." },
      { sentence: "I'll buy a new phone. (or) I'll buy a new laptop." },
      { sentence: "She loves to travel. (but) She gets motion sickness." },
      { sentence: "He doesn't like to dance. (nor) He doesn't like to sing." },
    ],
    subordinating: [
      { sentence: "(After) She finished her work. She went for a walk." },
      { sentence: "(Although) It was raining. We went to the beach." },
      { sentence: "(Since) He had no money. He couldn't buy the tickets." },
      { sentence: "(When) They arrived. The movie had already started." },
      { sentence: "(Because) It was a holiday. We decided to travel." },
      { sentence: "(Unless) You study hard. You won't pass the exam." },
      { sentence: "(While) She was cooking. He was setting the table." },
      { sentence: "(Before) He could answer. The phone rang." },
      { sentence: "(Although) They were tired. They continued working." },
      { sentence: "(Since) It was dark. They turned on the lights." },
      { sentence: "(Because) He missed the train. He was late for work." },
      { sentence: "(When) The bell rang. The students left the classroom." },
      { sentence: "(Although) She was scared. She faced her fears." },
      { sentence: "(Since) The weather was bad. They canceled the picnic." },
      { sentence: "(Before) She went to bed. She read a book." },
      { sentence: "(Although) It was noisy. They enjoyed the concert." },
      { sentence: "(While) He was reading. She was watching TV." },
      { sentence: "(Because) It was a long weekend. We planned a road trip." },
      { sentence: "(After) He ate lunch. He went for a jog." },
      { sentence: "(Since) It was a hot day. She wore a hat." },
    ],
    correlative: [
      { sentence: "(Both---and) She is a singer. She is a dancer." },
      { sentence: "(Either---or) You go to the party. You stay home." },
      { sentence: "(Neither---nor) He likes tea. He likes coffee." },
      {
        sentence: "(Not only---but also) She is talented. She is hardworking.",
      },
      { sentence: "(Whether---or) They win. They lose." },
      {
        sentence:
          "(Both---and) She can play the piano. She can play the guitar.",
      },
      { sentence: "(Not only---but also) He can swim. He can dive." },
      { sentence: "(Either---or) We study. We fail." },
      { sentence: "(Neither---nor) It is cold. It is hot." },
      { sentence: "(Both---and) He works hard. He plays hard." },
      { sentence: "(Whether---or) She is happy. She is sad." },
      { sentence: "(Neither---nor) She likes chocolate. She likes vanilla." },
      {
        sentence: "(Not only---but also) She is intelligent. She is creative.",
      },
      { sentence: "(Either---or) We would succeed. We would fail." },
      {
        sentence:
          "(Both---and) The manager and the employees were satisfied with the results.",
      },
      { sentence: "(Not only---but also) He is a doctor. He is a writer." },
      { sentence: "(Neither---nor) She is a vegetarian. She is a vegan." },
      { sentence: "(Both---and) She can draw. She can paint." },
      { sentence: "(Whether---or) She likes pizza. She likes pasta." },
      { sentence: "(Either---or) They win the game. They lose the game." },
    ],
  };

  const renderExercises = (title, data) => (
    <div>
      <h3>{title}</h3>
      <ol>
        {data.map((exercise, index) => (
          <li key={index}>
            {exercise.sentence} <br />
            <br />
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <div className="container">
      {renderExercises(
        "Exercises for Coordinating Conjunctions",
        exercises.coordinating
      )}
      {renderExercises(
        "Exercises for Subordinating Conjunctions",
        exercises.subordinating
      )}
      {renderExercises(
        "Exercises for Correlative Conjunctions",
        exercises.correlative
      )}
    </div>
  );
}
