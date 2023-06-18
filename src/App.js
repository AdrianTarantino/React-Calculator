import React from 'react';


function CalculatorButton({ buttonValue }) {
    return(
        <button>{ buttonValue }</button>
    );
}

function CalculatorButtonRow({ buttonValues }) {
    return(
        <td><CalculatorButton buttonValue={ buttonValues[0]} /></td>    
    );
}

function CalculatorScreen({ displayText }) {
    return(
        <tr><div><p>{ displayText }</p></div></tr>
    );
}

function CalculatorBase() {
    return(
        <div>
            <table>
                <CalculatorScreen displayText={'1 + 1 = 2'}/>
            </table>
        </div>
    )
}

class App extends React.Component {
    render() {
      return (
        <div>
        </div>
      );
    }
}

export default App;