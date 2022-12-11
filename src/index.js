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


class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayNumber: "0",
    }
  }

  handleButtonClick(value) {
    const displayNumber = this.state.displayNumber.slice();

    if(displayNumber === "0") {
      this.setState({displayNumber: `${value}`});
      return
    }
    this.setState({displayNumber: `${displayNumber}${value}`});
  }

  renderBlock(value) {
    return (
      <Block 
        value={value} 
        onClick={() => {this.handleButtonClick(value)}}
      />
    );
  }
  
  render() {
    const displayNumber = this.state.displayNumber;

    return (
      <div className='Calculator'>
        <div className='Number-Screen'>
          <p className='Text'>{displayNumber}</p>
        </div>
        <div className="board-row">
          {this.renderBlock(7)}
          {this.renderBlock(8)}
          {this.renderBlock(9)}
        </div>
        <div className="board-row">
          {this.renderBlock(4)}
          {this.renderBlock(5)}
          {this.renderBlock(6)}
        </div>
        <div className="board-row">
          {this.renderBlock(1)}
          {this.renderBlock(2)}
          {this.renderBlock(3)}
        </div>
        <div className="board-row">
          {this.renderBlock(0)}
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