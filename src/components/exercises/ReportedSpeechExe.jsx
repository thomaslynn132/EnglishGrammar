import React from "react";

export default function RSExe() {
  const exercises = [
    "She said, 'I am going to the store.'",
    "He told me, 'I will call you later.'",
    "We asked, 'Can you help us with the project?'",
    "They said, 'We have already seen that movie.'",
    "She asked, 'Are you coming to the party?'",
    "He said, 'I have finished my homework.'",
    "They asked, 'Have you visited Paris before?'",
    "I told her, 'I like chocolate.'",
    "He said, 'I'm not feeling well.'",
    "We asked, 'What time does the train leave?'",
    "She said, 'I saw him at the park yesterday.'",
    "They asked, 'Where did you find that book?'",
    "He told me, 'I have never been to Japan.'",
    "She asked, 'Can you pass me the salt, please?'",
    "We said, 'Let's go to the beach this weekend.'",
    "He said, 'I will meet you at the restaurant.'",
    "They asked, 'How much does this cost?'",
    "I told him, 'I don't like seafood.'",
    "She said, 'I have a job interview tomorrow.'",
    "We asked, 'Why did you leave the party early?'",
    "He said, 'I didn't understand the question.'",
    "They asked, 'Have you ever tried sushi?'",
    "She said, 'I can't believe he said that.'",
    "We asked, 'Did you enjoy the concert?'",
    "He told me, 'I won't be able to come to the meeting.'",
    "She asked, 'Where did you buy those shoes?'",
    "They said, 'We will be there on time.'",
    "I told her, 'I had a great time at the party.'",
    "He said, 'I'm going to learn how to play the guitar.'",
    "We asked, 'Who recommended this restaurant?'",
    "She said, 'I have to study for the exam.'",
    "They asked, 'Did you see the news about the election?'",
    "He told me, 'I have never met her parents.'",
    "We asked, 'Why didn't you tell us about the problem?'",
    "She said, 'I will let you know the results.'",
    "He asked, 'Can you lend me some money?'",
    "They said, 'We were at the museum last weekend.'",
    "I told him, 'I won't be able to attend the meeting.'",
    "She asked, 'Did you finish reading the book?'",
    "We said, 'Let's go camping next summer.'",
    "He told me, 'I have been working on this project for months.'",
    "They asked, 'Where did you get that information?'",
    "She said, 'I had a dream about flying.'",
    "We asked, 'Can you help us move the furniture?'",
    "He said, 'I don't know the answer to that question.'",
    "They asked, 'Why are you so late?'",
    "I told her, 'I'm going to visit my grandparents.'",
    "She said, 'I will never forget this moment.'",
    "We asked, 'Have you ever been to a music festival?'",
    "He told me, 'I can't believe I lost my keys.'",
  ];

  return (
    <div>
      <h3>Change the following sentences into reported speech.</h3>
      <ol>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise} <br /> <br />
          </li>
        ))}
      </ol>
    </div>
  );
}
