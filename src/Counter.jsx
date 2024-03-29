import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: "",
    };
  }

  updateGameStatus = (previousStateCount) => {
    let result = "";
    if (previousStateCount >= 20) {
      result = "WIN";
    }
    if (previousStateCount <= -20) {
      result = "DEFEAT";
    }

    return result;
  };

  handleAttack = () => {
    this.setState((previousState) => {
      if(previousState.gameStatus === ""){
        let newCount = previousState.count + Math.round(Math.random() * 10);
        let result = this.updateGameStatus(newCount);
        return { count: newCount, lastPlay: "Attack", gameStatus: result };
      }
    });
  };

  handleDefence = () => {
    this.setState((previousState) => {
      if(previousState.gameStatus === ""){
        let newCount = previousState.count + Math.round(Math.random() * 10);
        let result = this.updateGameStatus(newCount);
        return { count: newCount, lastPlay: "Defence", gameStatus: result };
      }
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };

  handleReset = () => {
    this.setState((previousState) => {
      return { count: 0, lastPlay: "", gameStatus: "" };
    });
  };

  render() {
    return (
      <div
        className="row text-white text-center"
        style={{ backgroundColor: "black" }}
      >
        <h1>Game Score: {this.state.count} </h1>
        <p>You win at +20 points and lose at -20 points!</p>
        <p>Last Play: {this.state.lastPlay}</p>
        <h3>Game Status: {this.state.gameStatus}</h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          ></img>
        </div>
        <div className="col-6 col-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefence}
          ></img>
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
