import React from "react";

export default function Score(props) {
  return (
    <div>
      <p className="text">
        Your Score: {props.numCorrect}/{props.numQuestions}
      </p>
    </div>
  );
}
