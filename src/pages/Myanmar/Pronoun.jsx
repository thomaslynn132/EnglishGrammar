import React from "react";
import "../../App.css";

export default function Pronoun() {
  return (
    <>
      <div className="container">
        <p>
          A pronoun is a word that is used to refer a noun. <br />
          <b>
            Types of pronouns:
            <ol type="123">
              <li>Personal Pronoun</li>
              <li>Relative Pronoun</li>
              <li>Demonstrative Pronoun</li> <li>Interrogative Pronoun</li>
              <li>Quantitive Pronoun</li> <li>Indefinite Pronoun</li>
            </ol>
          </b>
          <h3>1. Personal Pronouns</h3>
          Personal pronouns refer to person or people or things.
        </p>{" "}
        <br />
        <table>
          <tr>
            <th>Singular Or Plural</th>
            <th>First,Second or Third Person</th>
            <th>Subject</th>
            <th>Object</th>
            <th>Possive Pronouns</th>
            <th>Reflexive Pronouns</th>
          </tr>
          <tr>
            <th rowSpan={3}>Singular</th>
            <td>First</td>
            <td>I</td>
            <td>Me</td>
            <td>Mine</td>
            <td>Myself</td>
          </tr>
          <tr>
            <td>Second</td>
            <td>You</td>
            <td>You</td>
            <td>Yours</td>
            <td>Yourself</td>
          </tr>
          <tr>
            <td>Third</td>
            <td>It</td>
            <td>It</td>
            <td>Its</td>
            <td>Itself</td>
          </tr>
          <tr>
            <th rowSpan={3}>Plural</th>
            <td>First</td>
            <td>We</td>
            <td>Us</td>
            <td>Ours</td>
            <td>Ourselves</td>
          </tr>
          <tr>
            <td>Second</td>
            <td>You</td>
            <td>You</td>
            <td>Yours</td>
            <td>Yourselves</td>
          </tr>
          <tr>
            <td>Third</td>
            <td>They</td>
            <td>Them</td>
            <td>Theirs</td>
            <td>Themselves</td>
          </tr>
        </table>{" "}
        <br />
        <p>
          <h3>2. Relative Pronouns</h3>
          Relative pronouns are pronouns used to introduce relative clauses.
          <br /> Relative pronouns are:
          <ul typeof="dot">
            <li>
              <h5>Who</h5>
              <i>Who</i> refers to people as the subject of the clause.
              <br /> (Example.
              <br /> Monkey D Luffy is the man who will become king of the
              pirates.)
            </li>
            <li>
              <h5>Whom</h5>
              <i>Whom</i> refers to people as the object of the clause.
              <br /> (Example.
              <br /> This morning, I saw a man whom people don't talk with as
              the social punishment for supporting dictactors.)
            </li>
            <li>
              <h5>Which</h5>
              <i>Which </i>refers to the things as the subject or object of the
              clause.
              <br /> (Example. <br /> Loving Pablo is a great movie which is
              about the world's most powerful criminal. <br /> Jackie which bit
              me this morning, is Mr. Thomas's dog.)
            </li>
            <li>
              <h5>That</h5>
              <i>That</i> refers to both people and things as the subject or
              object of the clause. <br /> (Example. <br /> Loving Pablo is a
              great movie that is about the world's most powerful criminal.
              <br /> Jackie that bit you this morning, is Mr. Thomas's dog.
              <br /> This morning, I saw a man that people don't talk with as
              the social punishment for supporting dictactors. <br /> Monkey D
              Luffy is the man that will become king of the pirates.)
            </li>
            <li>
              <h5>Whose</h5>
              <i>Whose</i> refer to the possession of the people or thing.
              <br /> (Example. <br />I saw a former soldier whose left leg is
              missing for walking places he should not go.)
            </li>
          </ul>
          <h3>3. Demonstrative Pronoun</h3>
          A demonstrative pronoun is a word used to point something or someone
          specific.
          <br /> There are four demonstrative pronouns namely{" "}
          <b> this, that, these and those</b>.
          <br />
          <h5>This</h5>
          <b>"This"</b> refers to a singular thing or person that is near the
          first person.
          <br />
          (Example. <br /> This is the man who tries hardest in the class.)
          <br />
          <h5>That</h5>
          <b>"That" </b> refers to a singular thing or person that is a distance
          far from the first person.
          <br />
          (Example. <br />
          That is the best item you can get here.)
          <h5>These</h5>
          <b>"These"</b> refers to multiple things or people that are near the
          first person.
          <br />
          (Example. <br /> These are the words that I never told you.)
          <br />
          <h5> Those</h5>
          <b>"Those"</b> refers to multiple things or people that are far from
          the first person.
          <br /> ( Example. <br /> Those are the best days of my life.) <br />
          <br />
          <b>
            <i>
              Note: If a noun follows a demonstrative pronoun, it turns into a
              demonstrative adjective.
            </i>
          </b>
          <h3>4. Interrogative Pronouns</h3>
          Interrofgative pronouns are used to refer unknown nouns by an
          interrogative sentence. <br /> There are five innterrogative pronouns
          namely <b>who, which, whom, what and whose</b>.
          <br />
          <h5>Who</h5>
          <b>"Who"</b> is used to ask about a subjective person or people.{" "}
          <br /> (Example. <br /> Who gave you this book?)
          <h5>Whom</h5>
          <b>"Whom"</b> is used to ask about an objective person or people.{" "}
          <br /> (Example. <br /> Whom should I give these flowers now?)
          <h5>What</h5>
          <b>"What"</b> is used to ask about things or ideas. <br /> (Example.
          <br /> What are you going to do now? <br /> What do you want to take?)
          <h5>Which</h5>
          <b>"Which"</b> is used to ask about things or ideas from the
          selections or choices.
          <br /> (Example. <br /> Which is your favourite anime character in One
          Piece? <br /> Which should I wear, boots or sneakers?)
          <h5>Whose</h5>
          <b>"Whose"</b> is used to ask about the possession of things or ideas.
          <br /> (Example. <br /> Whose are these books? <br /> Johnny is
          curious about whosse are these ideas?)
          <br />
          <b>
            <i>
              Note: If a noun exists behind an interrogative pronoun("what",
              "which" and "whose"), it turns into an interrogative adjective.
            </i>
          </b>
          <h3>5. Quantitative Pronouns</h3>
          Quantitative pronouns refers to nouns by showing the quantities of the
          nouns. <br /> (Example. one, two, three, some, any, all, many, much,
          none)
          <br />
          (Example. There are a lot of books are on the table. Some are mine and
          none is Jame's.)
          <br />
          <b>
            <i>
              Note: If there is a noun behind a quantitative pronoun, it becomes
              a quantitative adjective.
            </i>
          </b>
          <h3>6. Indefinite Pronouns</h3>
          Indefinite pronouns refer to people or things whithout saying
          specifically who or what they are. <br /> (Example. someone, somebody,
          something, anyone, anybody, anything, noone, nobody, nothing,
          everyone, everybody, everything)
        </p>
      </div>
    </>
  );
}
