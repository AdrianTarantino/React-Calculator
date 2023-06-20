import { useState } from 'react';
import stringMath from 'string-math';   // Library used for taking string of math formula and solving.
import './CalculatorComponents.css';

/** 
 * Component used to represent each button
 * on the calculator.
 */
function CalculatorButton({ buttonText, onClick }) {
    return(
        <button className={ 'CalculatorButton' } onClick={ onClick }>{ buttonText }</button>
    );
} 

/**
 * Component used to represent each row of buttons
 * on the calculator.
 */
function CalculatorButtonRow({ buttonTexts, onClicks}) {
    let cells = [];

    for(let i = 0; i < buttonTexts.length; i ++) {
        cells.push(<CalculatorButton buttonText={ buttonTexts[i] } onClick={ onClicks[i] }/>);
    }

    return(
        <tr>
            { cells }
        </tr>    
    );
}

/**
 * Component used to represent the screen
 * of the calculator.
 */
function CalculatorScreen({ displayText }) {
    return(
        <td><div className={ 'CalculatorScreen' }>
            <p className={ 'CalculatorScreenText' }>{ displayText }</p>
        </div></td>
    );
}

/**
 * Component used to represent the base of the calculator.
 */
function CalculatorBase() {
    const [screenText, setScreenText] = useState('');
    const [canAddSpecialChar, setCanAddSpecialChar] = useState(false);
    const specialChars = [0, '+', '-', '*', '/'];

    const addCharToScreen = (char) => {
        let isSpecialChar = false;
        for(let i = 0; i < specialChars.length; i ++) {
            if(char === specialChars[i]) { 
                isSpecialChar = true; 
                break;
            }
        }

        if(!canAddSpecialChar && isSpecialChar) { return; }
        setScreenText([screenText, char].join(''));

        if(isSpecialChar) { 
            setCanAddSpecialChar(false);
            return;
        }
        setCanAddSpecialChar(true);
    }

    const clearScreen = () => {
        setCanAddSpecialChar(false);
        setScreenText('');
    };

    const solveEqueation = () => {
        try {
            const solvedEquation = stringMath(screenText);
            setScreenText(solvedEquation);
        }

        catch(error) {
            clearScreen();
        }
    };

    return(
        <div className={ 'CalculatorBase' }>
            <table>
                <tr>
                    <CalculatorScreen displayText={ screenText }/>
                </tr>
                <CalculatorButtonRow buttonTexts={ [7, 8, 9, '/'] } onClicks={ [() => { addCharToScreen(7); }, () => { addCharToScreen(8); }, () => { addCharToScreen(9); }, () => { addCharToScreen('/'); }] }/>
                <CalculatorButtonRow buttonTexts={ [4, 5, 6, 'x'] } onClicks={ [() => { addCharToScreen(4); }, () => { addCharToScreen(5); }, () => { addCharToScreen(6); }, () => { addCharToScreen('*'); }] }/>
                <CalculatorButtonRow buttonTexts={ [1, 2, 3, '-'] } onClicks={ [() => { addCharToScreen(1); }, () => { addCharToScreen(2); }, () => { addCharToScreen(3); }, () => { addCharToScreen('-'); }] }/>
                <CalculatorButtonRow buttonTexts={ ['C', 0, '=', '+'] } onClicks={ [clearScreen, () => { addCharToScreen(0); }, solveEqueation, () => { addCharToScreen('+'); }] }/>
            </table>
        </div>
    );
}

export default CalculatorBase;