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
      <div className="Button">
        <p className='Text'>{this.state.value}</p>
      </div>
    )
  }
}


class NumberScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayNumber: this.props.displayNumber
    };
  }

  updateDisplayNumber(newDisplayNumber) {
    this.setState({displayNumber: newDisplayNumber});
  }

  render() {
    return (
      <p className='Text'>{this.state.displayNumber}</p>
    );
  }
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayNumber: 0,
    }
  }

  renderBlock(value) {
    return (
      <Block value={value}/>
    );
  }

  renderNumberScreen(displayNumber) {
    return (
      <NumberScreen displayNumber={0}/>
    );
  }
  
  render() {
    return (
      <div class='calculator-object'>
        <div>
          {this.renderNumberScreen(0)}
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