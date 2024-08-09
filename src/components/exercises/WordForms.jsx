import React from "react";

export default function WordForms() {
  const exercises = [
    {
      sentence: "The __________ of the story was unexpected.",
      word: "outcome",
    },
    {
      sentence: "She is known for her __________ in solving complex problems.",
      word: "proficiency",
    },
    {
      sentence:
        "The students showed great __________ in their academic achievements.",
      word: "diligence",
    },
    {
      sentence:
        "The company's __________ has increased significantly in the last quarter.",
      word: "profitability",
    },
    {
      sentence: "The medicine had a __________ effect on her condition.",
      word: "therapeutic",
    },
    {
      sentence: "The __________ of the building was impressive.",
      word: "architecture",
    },
    {
      sentence: "His __________ leadership style inspired the entire team.",
      word: "visionary",
    },
    {
      sentence:
        "The novel is filled with rich __________ and vivid descriptions.",
      word: "imagery",
    },
    {
      sentence: "The athlete's performance was truly __________.",
      word: "remarkable",
    },
    {
      sentence: "The __________ of the experiment were carefully recorded.",
      word: "results",
    },
    {
      sentence:
        "The project requires a high level of __________ and attention to detail.",
      word: "precision",
    },
    {
      sentence: "The chef's __________ dish was a highlight of the evening.",
      word: "culinary",
    },
    {
      sentence: "The __________ of the building was impressive.",
      word: "structure",
    },
    {
      sentence: "The job requires a good __________ of technical skills.",
      word: "command",
    },
    {
      sentence: "The __________ of the movie left the audience in suspense.",
      word: "plot",
    },
    {
      sentence: "The __________ of the forest is home to many rare species.",
      word: "ecosystem",
    },
    {
      sentence: "Her __________ in the face of adversity was admirable.",
      word: "resilience",
    },
    {
      sentence: "The software provides a wide range of __________ options.",
      word: "configuration",
    },
    {
      sentence: "The storm caused widespread __________ in the area.",
      word: "destruction",
    },
    {
      sentence: "The __________ of the music added to the overall atmosphere.",
      word: "melody",
    },
    {
      sentence:
        "The company has a strong __________ commitment to sustainability.",
      word: "environmental",
    },
    {
      sentence: "The novel explores the __________ of human relationships.",
      word: "complexity",
    },
    {
      sentence: "The __________ of the document needs to be revised.",
      word: "format",
    },
    {
      sentence:
        "The politician's speech had a profound __________ on public opinion.",
      word: "impact",
    },
    {
      sentence:
        "The success of the project was due to the team's __________ efforts.",
      word: "collaborative",
    },
    {
      sentence:
        "The __________ of the play was both entertaining and thought-provoking.",
      word: "performance",
    },
    {
      sentence:
        "The __________ of the experiment led to groundbreaking discoveries.",
      word: "methodology",
    },
    {
      sentence:
        "The company's __________ strategy has been effective in the market.",
      word: "marketing",
    },
    {
      sentence: "The __________ of the book appealed to a wide audience.",
      word: "content",
    },
    {
      sentence: "The __________ of the building was carefully designed.",
      word: "architecture",
    },
    {
      sentence: "The __________ of the software allows for easy customization.",
      word: "flexibility",
    },
    {
      sentence:
        "The __________ of the novel reflects the author's unique style.",
      word: "style",
    },
    {
      sentence: "The __________ of the team contributed to their victory.",
      word: "unity",
    },
    {
      sentence: "The __________ of the artwork showcased the artist's talent.",
      word: "presentation",
    },
    {
      sentence: "The __________ of the plan requires careful consideration.",
      word: "execution",
    },
    {
      sentence:
        "The __________ of the project was evident in the final product.",
      word: "quality",
    },
    {
      sentence: "The __________ of the performance left a lasting impression.",
      word: "impact",
    },
    {
      sentence:
        "The __________ of the issue requires a comprehensive approach.",
      word: "resolution",
    },
    {
      sentence: "The __________ of the landscape was breathtaking.",
      word: "scenery",
    },
    {
      sentence:
        "The __________ of the play was both entertaining and educational.",
      word: "presentation",
    },
    {
      sentence: "The __________ of the experiment yielded valuable results.",
      word: "outcome",
    },
    {
      sentence:
        "The __________ of the novel captivated readers from the beginning.",
      word: "narrative",
    },
    {
      sentence:
        "The __________ of the project demands attention to every detail.",
      word: "completion",
    },
    {
      sentence: "The __________ of the painting showcased the artist's skill.",
      word: "depiction",
    },
    {
      sentence:
        "The __________ of the document is crucial for its effectiveness.",
      word: "structure",
    },
    {
      sentence: "The __________ of the music created a magical atmosphere.",
      word: "composition",
    },
    {
      sentence: "The __________ of the company is reflected in its success.",
      word: "culture",
    },
    {
      sentence: "The __________ of the software allows for easy integration.",
      word: "compatibility",
    },
    {
      sentence:
        "The __________ of the team was evident in their strong collaboration.",
      word: "cohesion",
    },
    {
      sentence:
        "The __________ of the document is crucial for its effectiveness.",
      word: "format",
    },
  ];

  return (
    <div>
      <h3>Fill in the Blanks</h3>
      <ol>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.sentence} (<em>{exercise.word}</em>)
            <br /> <br />
          </li>
        ))}
      </ol>
    </div>
  );
}
