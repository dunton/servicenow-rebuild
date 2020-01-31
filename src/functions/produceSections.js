import React from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";

export const produceSections = data => {
  let count = 0;
  return data.map((obj, i) => {
    if (obj.type === "question") {
      count++;
      return (
        <div className="section" key={obj.key}>
          <Question data={obj} count={count} questionNumber={count} />
        </div>
      );
    } else {
      return (
        <div className="section" key={obj.key}>
          <Answer data={obj} />
        </div>
      );
    }
  });
};
