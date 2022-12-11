import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Block extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      position: this.props.position,
    };
  }

  render() {
    const divPosition = `Button ${this.state.position}`;

    return (
      <div class={divPosition}>
        <p class='Text'>{this.state.value}</p>
      </div>
    )
  }
}


class Screen extends React.Component {
  renderBlock(value, position) {
    return (
      <Block value={value} position={position}/>
    );
  }
  
  render() {
    return (
      <div class='Screen'>
        <div class='Row'>
          {this.renderBlock(7, "one")}
          {this.renderBlock(8, "two")}
          {this.renderBlock(9, "three")}
        </div>
        <div class='Row'>
          {this.renderBlock(4, "one")}
          {this.renderBlock(5, "two")}
          {this.renderBlock(6, "three")}
        </div>
        <div class='Row'>
          {this.renderBlock(1, "one")}
          {this.renderBlock(2, "two")}
          {this.renderBlock(3, "three")}
        </div>
        <div class='Row'>
          {this.renderBlock(0, "one")}
        </div>
      </div>
    );
  }
}


class Calculator extends React.Component {
  render() {
    return (
      <div>
        <Screen/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator/>);