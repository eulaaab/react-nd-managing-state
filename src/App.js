import React, { Component } from "react";
import "./App.css";
import Score from "./components/Score/Score";
import Game from "./components/Game/Game";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0,
    };
    // this.question = this.question(this);
  }

  answerHandler = (answerCorrect) => {
    if (answerCorrect) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1,
        numQuestions: currentState.numQuestions + 1,
      }));
    } else {
      this.setState((currentState) => ({
        numQuestions: currentState.numQuestions + 1,
      }));
    }
  };

  render() {
    const { numCorrect, numQuestions } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {
            //<img src={logo} className="App-logo" alt="logo" />
          }
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <Game answerHandler={this.answerHandler} />
          <Score numCorrect={numCorrect} numQuestions={numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
