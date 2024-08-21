import React from "react";
// import './App.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
  }

  handleDecrement(){
    console.log(this)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
