import './CalculatorComponents.css';

function CalculatorButton({ buttonValue }) {
    return(
        <button className={ 'CalculatorButton' }>{ buttonValue }</button>
    );
} 

function CalculatorButtonRow({ buttonValues }) {

    let cells = [];
    for(let i = 0; i < buttonValues.length; i ++) {
        cells.push(<CalculatorButton buttonValue={ buttonValues[i] }/>);
    }

    return(
        <tr>
            { cells }
        </tr>    
    );
}

function CalculatorScreen({ displayText }) {
    return(
        <div className={ 'CalculatorScreen' }>
            <p className={ 'CalculatorScreenText' }>{ displayText }</p>
        </div>
    );
}

function CalculatorBase() {
    return(
        <div className={ 'CalculatorBase' }>
            <table>
                <tr>
                    <CalculatorScreen displayText={ '1 + 2' }/>
                </tr>
                <CalculatorButtonRow buttonValues={ [7, 8, 9, '/'] }/>
                <CalculatorButtonRow buttonValues={ [4, 5, 6, 'x'] }/>
                <CalculatorButtonRow buttonValues={ [1, 2, 3, '-'] }/>
                <CalculatorButtonRow buttonValues={ ['C', 0, '=', '+'] }/>
            </table>
        </div>
    )
}

export default CalculatorBase;