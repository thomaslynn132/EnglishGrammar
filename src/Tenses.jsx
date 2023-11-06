import React from "react";
export default function Tenses() {
  return (
    <>
      <div className="container">
        Verbs need tenses in order to have a meaningful sentence. There are 12
        kinds of tenses.
        <table>
          <tr>
            <th>
              Simple Present Tense <br />
              V1
            </th>
            <th>
              Present Perfect Tense <br />
              Has, Have + V3
            </th>
            <th>
              Present Continuous Tense <br />
              Am, Is, Are + Ving
            </th>
            <th>
              Present Perfect Continuous Tense <br />
              Has, Have + been + Ving
            </th>
          </tr>
          <tr>
            <th>
              Simple Past Tense <br />
              V2
            </th>
            <th>
              Past Perfect Tense <br />
              Had + V3
            </th>
            <th>
              Past Continuous Tense <br />
              Was, Were + Ving
            </th>
            <th>
              Past Perfect Continuous Tense <br />
              Had + been + Ving
            </th>
          </tr>
          <tr>
            <th>
              Future Tense <br />
              Will + V1
            </th>
            <th>
              Future Perfect Tense <br />
              Will + have + V3
            </th>
            <th>
              Future Continuous Tense <br />
              Will + be + Ving
            </th>
            <th>
              Future Perfect Continuous Tense <br />
              Will + have + been + Ving
            </th>
          </tr>
        </table>
      </div>
    </>
  );
}
