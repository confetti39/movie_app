import './App.css';
import PropTypes from "prop-types"
import React from 'react';


class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState({ count: this.state.count + 1 });
    //이렇게 this.state.count사용하는 것은 비추천함
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
    //setState할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법임
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}


export default App;
