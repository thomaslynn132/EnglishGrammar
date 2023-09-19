import React from "react";
import "./App.css";

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
        </p>
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
        </table>
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
        </p>
      </div>
    </>
  );
}
