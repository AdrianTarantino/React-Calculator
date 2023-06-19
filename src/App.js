import React from 'react';
import CalculatorBase from './calculator-components/CalculatorComponents.js';

class App extends React.Component {
    render() {
        return (
            <>
                <h1 className='main-heading'>Calculator</h1>
                <CalculatorBase />
            </>
        );
    }
}

export default App;