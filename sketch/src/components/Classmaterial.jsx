import React from "react";
import "./app.css";

export const Classmaterial = () => {
  return (
    <>
      <div className="container py-5">
        <h1 className="pb-4 ">Tabla del verbo To-be</h1>
        <table className="container text-center">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Present</th>
              <th>Present negative</th>
              <th>Present question</th>
              <th>Past</th>
              <th>Past negative</th>
              <th>Past question</th>
              <th>Future</th>
              <th>Future negative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>am</td>
              <td>am not</td>
              <td>am I?</td>
              <td>was</td>
              <td>was not</td>
              <td>was I?</td>
              <td>will be</td>
              <td>will not be</td>
            </tr>
            <tr>
              <td>You</td>
              <td>are</td>
              <td>are not</td>
              <td>are you?</td>
              <td>were</td>
              <td>were not</td>
              <td>were you?</td>
              <td>will be</td>
              <td>will not be</td>
            </tr>
            <tr>
              <td>He/She/It</td>
              <td>is</td>
              <td>is not</td>
              <td>is he/she/it?</td>
              <td>was</td>
              <td>was not</td>
              <td>was he/she/it?</td>
              <td>will be</td>
              <td>will not be</td>
            </tr>
          </tbody>
        </table>

        <div>
          <p className="pt-3">
            El verbo to be es el verbo más utilizado en la lengua inglesa y
            también el más importante. Se utiliza como verbo principal y como
            auxiliar, y es irregular en pasado y en presente. Tiene 4
            significados aunque los principales son ser y estar. Los cuatro
            significados son:
          </p>
          <ul>
            <li>Ser</li>
            <li>Estar</li>
            <li>Haber</li>
            <li>Poder</li>
          </ul>
          <h3 className="pb-3">Ejemplos:</h3>
          <p>
            I am a tall person. (Yo soy una persona alta). She is sad. (Ella
            está triste). There are four chairs in the room. (Hay cuatro sillas
            en la clase). You are not to open your mouth in the meeting. (No
            puedes abrir la boca en el meeting)
          </p>
        </div>
      </div>
    </>
  );
};
