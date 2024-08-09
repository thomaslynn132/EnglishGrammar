import React from "react";

export default function TensesExercises() {
  const exercises = [
    { sentence: "He usually __________ (eat) dinner at 7 PM." },
    { sentence: "Right now, they __________ (discuss) the new project." },
    {
      sentence:
        "By the time you arrive, we __________ (already/prepare) the meal.",
    },
    { sentence: "Last summer, we __________ (travel) to the mountains." },
    { sentence: "While I __________ (read) the book, the phone rang." },
    {
      sentence:
        "Before the concert started, the band __________ (perform) a soundcheck.",
    },
    { sentence: "She __________ (visit) her grandparents next weekend." },
    {
      sentence: "This time next year, I __________ (live) in a different city.",
    },
    { sentence: "By 2040, scientists __________ (find) a cure for cancer." },
    { sentence: "They __________ (live) in Paris for six years now." },
    { sentence: "We __________ (study) for the exam yesterday." },
    {
      sentence:
        "By this time tomorrow, I __________ (fly) to a tropical island.",
    },
    { sentence: "He __________ (usually/finish) his work by 6 PM." },
    {
      sentence: "She __________ (not/speak) Spanish before she moved to Spain.",
    },
    { sentence: "While they __________ (have) dinner, the power went out." },
    { sentence: "What __________ you (do) when you found the lost wallet?" },
    {
      sentence:
        "By the time the guests arrived, she __________ (already/cook) a delicious meal.",
    },
    {
      sentence: "They __________ (never/try) sushi before they went to Japan.",
    },
    { sentence: "They __________ (attend) the conference next month." },
    {
      sentence:
        "This time next week, we __________ (sit) on a beach in Hawaii.",
    },
    {
      sentence:
        "By 2060, scientists __________ (discover) a way to travel to Mars.",
    },
    { sentence: "She __________ (live) in London for seven years." },
    {
      sentence:
        "They __________ (work) on the project for hours before submitting it.",
    },
    {
      sentence:
        "By this time next month, she __________ (complete) her master's degree.",
    },
    { sentence: "We __________ (learn) French for two years." },
    { sentence: "How long __________ you (wait) for the bus yesterday?" },
    { sentence: "They __________ (study) for the exam for weeks." },
    {
      sentence:
        "She __________ (live) in New York for eight years before moving to London.",
    },
    {
      sentence:
        "By this time next year, I __________ (travel) to at least five different countries.",
    },
    { sentence: "She __________ (already/finish) painting the entire room." },
    {
      sentence:
        "We __________ (usually/take) a walk in the park in the evenings.",
    },
    { sentence: "Right now, they __________ (work) on a challenging project." },
    {
      sentence: "By the time you call, I __________ (already/finish) my work.",
    },
    {
      sentence:
        "Last winter, she __________ (spend) her holidays in the mountains.",
    },
    { sentence: "While I __________ (read) a book, the doorbell rang." },
    {
      sentence:
        "Before the movie started, the actors __________ (practice) their lines.",
    },
    { sentence: "She __________ (visit) her relatives next month." },
    {
      sentence:
        "This time next year, they __________ (live) in a different country.",
    },
    {
      sentence:
        "By 2030, scientists __________ (find) a solution to pollution.",
    },
    { sentence: "They __________ (live) in this neighborhood for ten years." },
    { sentence: "We __________ (study) for the exam last night." },
    {
      sentence:
        "By this time tomorrow, I __________ (fly) to a new destination.",
    },
    {
      sentence:
        "He __________ (usually/complete) his assignments before the deadline.",
    },
    { sentence: "She __________ (not/know) French before she moved to Paris." },
    { sentence: "While they __________ (have) lunch, the phone rang." },
    { sentence: "What __________ you (do) when the car broke down?" },
    {
      sentence:
        "By the time the guests arrived, she __________ (already/prepare) a delicious meal.",
    },
    {
      sentence: "They __________ (never/eat) sushi before they went to Japan.",
    },
    { sentence: "They __________ (attend) the conference next week." },
    {
      sentence:
        "This time next week, we __________ (relax) on a beautiful beach.",
    },
    {
      sentence:
        "By 2050, scientists __________ (develop) a cure for various diseases.",
    },
    { sentence: "She __________ (live) in this city for six years." },
    {
      sentence:
        "They __________ (work) on the project for hours before presenting it.",
    },
    {
      sentence:
        "By this time next month, she __________ (complete) her language course.",
    },
    { sentence: "We __________ (learn) Spanish for three months." },
    { sentence: "How long __________ you (wait) for the train yesterday?" },
    { sentence: "They __________ (study) for the exam all night." },
    {
      sentence:
        "She __________ (live) in New York for eight years before moving to London.",
    },
    {
      sentence:
        "By this time next year, I __________ (visit) at least ten different countries.",
    },
    { sentence: "She __________ (already/finish) painting the entire room." },
    { sentence: "We __________ (usually/play) board games on weekends." },
    {
      sentence:
        "Right now, they __________ (discuss) the latest project details.",
    },
    {
      sentence:
        "By the time you arrive, I __________ (already/prepare) dinner.",
    },
    {
      sentence:
        "Last summer, she __________ (visit) several countries in Europe.",
    },
    { sentence: "While I __________ (watch) TV, the phone suddenly rang." },
    {
      sentence:
        "Before the play started, the actors __________ (rehearse) for weeks.",
    },
    { sentence: "She __________ (travel) to Asia next month." },
    {
      sentence:
        "This time next year, they __________ (live) in a different city.",
    },
    {
      sentence:
        "By 2035, scientists __________ (find) a cure for the common cold.",
    },
    {
      sentence:
        "They __________ (live) in this neighborhood since they got married.",
    },
    { sentence: "We __________ (study) for the test all day yesterday." },
    {
      sentence:
        "By this time tomorrow, I __________ (fly) to a new destination.",
    },
    { sentence: "He __________ (usually/finish) his work before lunchtime." },
    { sentence: "She __________ (not/know) how to swim until last summer." },
    {
      sentence:
        "While they __________ (have) dinner, the power suddenly went out.",
    },
    { sentence: "What __________ you (do) when the alarm went off?" },
    {
      sentence:
        "By the time the guests arrived, she __________ (already/prepare) a delicious meal.",
    },
    { sentence: "They __________ (never/try) sushi until last weekend." },
    { sentence: "They __________ (attend) the seminar next week." },
    {
      sentence:
        "This time next week, we __________ (relax) on a beautiful beach in the Bahamas.",
    },
    {
      sentence:
        "By 2060, scientists __________ (discover) new methods to generate clean energy.",
    },
    { sentence: "She __________ (live) in this city for seven years now." },
    {
      sentence:
        "They __________ (work) on the project for hours before the deadline.",
    },
    {
      sentence:
        "By this time next month, she __________ (complete) her online course.",
    },
    { sentence: "We __________ (learn) French for four months." },
    { sentence: "How long __________ you (wait) for the bus yesterday?" },
    { sentence: "They __________ (study) for the exam until late at night." },
    {
      sentence:
        "She __________ (live) in New York for nine years before moving to London.",
    },
    {
      sentence:
        "By this time next year, I __________ (visit) at least twelve different countries.",
    },
    {
      sentence:
        "She __________ (already/finish) decorating her entire apartment.",
    },
    {
      sentence:
        "Despite the rain, they __________ (still/have) the outdoor concert last night.",
    },
    {
      sentence:
        "The moment they __________ (arrive), the show __________ (begin).",
    },
    { sentence: "Before I __________ (know) it, the day __________ (end)." },
    {
      sentence:
        "She __________ (practice) yoga every morning for the past year.",
    },
    {
      sentence: "They __________ (not/expect) to see each other at the event.",
    },
    {
      sentence:
        "As soon as he __________ (arrive), we __________ (start) the meeting.",
    },
    {
      sentence:
        "While she __________ (shop), she __________ (see) her old friend.",
    },
    {
      sentence:
        "Before the sun __________ (set), they __________ (complete) the hike.",
    },
    {
      sentence:
        "We __________ (travel) to several countries before we __________ (decide) to settle down.",
    },
  ];

  return (
    <div>
      <h3>Fill in the Blanks</h3>
      <ol>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.sentence} <br />
            <br />
          </li>
        ))}
      </ol>
    </div>
  );
}
