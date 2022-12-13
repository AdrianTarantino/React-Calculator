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
      <button className="button" 
              onClick={() => {this.props.onClick()}}>
        <p className='text'>{this.state.value}</p>
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
      displayEquation: "0",
      lastCharacter: "0",
    }
  }

  handleNumberButtonClick(value) {
    this.setState({lastCharacter: value});
    const displayEquation = this.state.displayEquation;

    if(displayEquation === "0") {
      this.setState({displayEquation: `${value}`});
      return
    }
    this.setState({displayEquation: `${displayEquation}${value}`});
  }

  handleOperationButtonClick(value) {
    if(value == "c") {
      this.setState({displayEquation: "0"});
      return;
    }
    
    const operationValues = ["=", "/", "X",
                             "-", "+"];
    if(operationValues.includes(this.state.lastCharacter)) {return}

    this.setState({lastCharacter: value});
    switch(value) {
      case "=":
        console.log("=");
        return;

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

      default:
        console.log("This wasn't supposed to happen")
        return;
    }

    const displayEquation = this.state.displayEquation
    this.setState({displayEquation: `${displayEquation}${value}`})
    return
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
    const displayEquation = this.state.displayEquation;

    return (
      <div className='calculator'>
        {/* The numbers and operations being used */}
        <div className='number-screen'>
          <p className='text'>{displayEquation}</p>   
        </div>
        
        {/* All the buttons for the operations and numbers */}
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