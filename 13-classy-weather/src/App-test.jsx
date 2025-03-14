import React from "react";
// import './App.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };

    this.handleDecrement = this.handleDecrement.bind(this)

    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleDecrement(){
    // console.log(this)
    this.setState((curState) => {
      return {count : curState.count - 1}
    })
  }

  handleIncrement(){
    this.setState((curState) => {
      return {count : curState.count + 1}
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
