import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dices: [0, 0, 0, 0, 0],
    };
  }

  roll = () => {
    let newDices = this.state.dices
    for (let i = 0 ; i < this.state.dices.length; i++){
        newDices[i] = Math.floor(Math.random() * 6) + 1
    }
    this.setState({dices : newDices})
  }

  render() {
    return (
      <div>
        <h1> Yatch Online </h1>
        {this.state.dices.map((dice) => (<div>
<input type = 'checkbox'/>
          <h3 style={{ textAlign: "center" }}> {dice} </h3>
          </div>
        ))}
        <button onClick={() => this.roll()}>
          Roll
        </button>
      </div>
    );
  }
}

export default App;
