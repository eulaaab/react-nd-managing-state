import React, { Component } from "react";

export default class Game extends Component {
  constructor(props) {
    super(props);
    const valuesArr = this.newQuestion();
    this.state = {
      value1: valuesArr[0],
      value2: valuesArr[1],
      value3: valuesArr[2],
      proposedAnswer: valuesArr[3],
    };
  }

  newQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };

  updateState = (newValuesArr) => {
    this.setState((currentState) => ({
      value1: newValuesArr[0],
      value2: newValuesArr[1],
      value3: newValuesArr[2],
      proposedAnswer: newValuesArr[3],
    }));
  };
  evaluateAnswer = (buttonAnswer) => {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const rightAnswer = value1 + value2 + value3;
    return (
      (rightAnswer === proposedAnswer && buttonAnswer === "true") ||
      (rightAnswer !== proposedAnswer && buttonAnswer === "false")
    );
  };

  answerHandler = (event) => {
    const newValuesArr = this.newQuestion();
    this.updateState(newValuesArr);
    const userAnswerCorrect = this.evaluateAnswer(event.target.name);
    this.props.answerHandler(userAnswerCorrect);
  };

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div>
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2}+ ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={this.answerHandler} name="true">
          True
        </button>
        <button onClick={this.answerHandler} name="false">
          False
        </button>
      </div>
    );
  }
}
