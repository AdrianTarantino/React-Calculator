import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Block extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  render() {
    return (
      <button className="Button" 
              onClick={() => {this.props.onClick()}}>
        <p className='Text'>{this.state.value}</p>
      </button>
    )
  }
}
class NumberBlock extends Block {}
class OperationBlock extends Block {}


class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayNumber: "0",
    }
  }

  handleNumberButtonClick(value) {
    const displayNumber = this.state.displayNumber.slice();

    if(displayNumber === "0") {
      this.setState({displayNumber: `${value}`});
      return
    }
    this.setState({displayNumber: `${displayNumber}${value}`});
  }

  handleOperationButtonClick(value) {
    switch(value) {
      case "c":
        this.setState({displayNumber: "0"});
        break;

      case "=":
        console.log("=");
        break;

      case "/":
        console.log("/");
        break;

      case "X":
        console.log("X");
        break;

      case "-":
        console.log("-");
        break;

      case "+":
        console.log("+");
        break;
    }
  }

  renderNumberBlock(value) {
    return <NumberBlock 
      value={value} 
      onClick={() => {this.handleNumberButtonClick(value)}}
    />
  }

  renderOperationBlock(value) {
    return <OperationBlock
      value={value}
      onClick={() => {this.handleOperationButtonClick(value)}}
    />;
  }
  
  render() {
    const displayNumber = this.state.displayNumber;

    return (
      <div className='Calculator'>
        <div className='Number-Screen'>
          <p className='Text'>{displayNumber}</p>
        </div>
        <div className="board-row">
          {this.renderNumberBlock(7)}
          {this.renderNumberBlock(8)}
          {this.renderNumberBlock(9)}
          {this.renderOperationBlock("/")}
        </div>
        <div className="board-row">
          {this.renderNumberBlock(4)}
          {this.renderNumberBlock(5)}
          {this.renderNumberBlock(6)}
          {this.renderOperationBlock("X")}
        </div>
        <div className="board-row">
          {this.renderNumberBlock(1)}
          {this.renderNumberBlock(2)}
          {this.renderNumberBlock(3)}
          {this.renderOperationBlock("-")}
        </div>
        <div className="board-row">
          {this.renderNumberBlock(0)}
          {this.renderOperationBlock("c")}
          {this.renderOperationBlock("=")}
          {this.renderOperationBlock("+")}
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator/>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);