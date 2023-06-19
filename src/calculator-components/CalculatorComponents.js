import { useState } from 'react';
import stringMath from 'string-math';
import './CalculatorComponents.css';

function CalculatorButton({ buttonValue, onClick }) {
    return(
        <button className={ 'CalculatorButton' } onClick={ onClick }>{ buttonValue }</button>
    );
} 

function CalculatorButtonRow({ buttonValues, onClicks}) {
    let cells = [];

    for(let i = 0; i < buttonValues.length; i ++) {
        cells.push(<CalculatorButton buttonValue={ buttonValues[i] } onClick={ onClicks[i] }/>);
    }

    return(
        <tr>
            { cells }
        </tr>    
    );
}

function CalculatorScreen({ displayText }) {
    return(
        <td><div className={ 'CalculatorScreen' }>
            <p className={ 'CalculatorScreenText' }>{ displayText }</p>
        </div></td>
    );
}

function CalculatorBase() {
    const [screenText, setScreenText] = useState(0);

    const addCharToScreen = (char) => {
        if(screenText.length === 1 && screenText[0] === '0') { 
            setScreenText(char); 
            return;
        }

        setScreenText([screenText, char].join(''));
    }

    const clearScreen = () => {
        setScreenText('0');
    };

    const solveEqueation = () => {
        const solvedEquation = stringMath(screenText);
        setScreenText(solvedEquation);
    };

    return(
        <div className={ 'CalculatorBase' }>
            <table>
                <tr>
                    <CalculatorScreen displayText={ screenText }/>
                </tr>
                <CalculatorButtonRow buttonValues={ [7, 8, 9, '/'] } onClicks={ [() => { addCharToScreen(7); }, () => { addCharToScreen(8); }, () => { addCharToScreen(9); }, () => { addCharToScreen('/'); }] }/>
                <CalculatorButtonRow buttonValues={ [4, 5, 6, 'x'] } onClicks={ [() => { addCharToScreen(4); }, () => { addCharToScreen(5); }, () => { addCharToScreen(6); }, () => { addCharToScreen('*'); }] }/>
                <CalculatorButtonRow buttonValues={ [1, 2, 3, '-'] } onClicks={ [() => { addCharToScreen(1); }, () => { addCharToScreen(2); }, () => { addCharToScreen(3); }, () => { addCharToScreen('-'); }] }/>
                <CalculatorButtonRow buttonValues={ ['C', 0, '=', '+'] } onClicks={ [clearScreen, () => { addCharToScreen(0); }, solveEqueation, () => { addCharToScreen('+'); }] }/>
            </table>
        </div>
    );
}

export default CalculatorBase;