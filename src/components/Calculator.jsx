import React, { useState } from 'react'
import Button from './Button/Button'
import Clear from './Clear/Clear'
import Screen from './Screen/Screen'
import './Calculator.css'


const Calculator = () => {
    
    const [input, setInput] = useState([]);
    
    const result = () => {
        try {
            setInput(
                eval(input).length > 3 && eval(input).includes('.')
                ? eval(input).toFixed(4)
                : eval(input)
            );
        } catch (e) {
            setInput([]);
        }
    };

    const addInput = value => {
        setInput(input + value)
    }


    return (
        <div className='wrapper_calculator'>
            <Screen input={input} />
            <div className='row'>
                <Button buttonValue={addInput}>7</Button>
                <Button buttonValue={addInput}>8</Button>
                <Button buttonValue={addInput}>9</Button>
                <Button buttonValue={addInput}>+</Button>
            </div>
            <div className='row'>
                <Button buttonValue={addInput}>4</Button>
                <Button buttonValue={addInput}>5</Button>
                <Button buttonValue={addInput}>6</Button>
                <Button buttonValue={addInput}>-</Button>
            </div>
            <div className='row'>
                <Button buttonValue={addInput}>1</Button>
                <Button buttonValue={addInput}>2</Button>
                <Button buttonValue={addInput}>3</Button>
                <Button buttonValue={addInput}>*</Button>
            </div>
            <div className='row'>
                <Button buttonValue={addInput}>0</Button>
                <Button buttonValue={addInput}>.</Button>
                <Button buttonValue={result}>=</Button>
                <Button buttonValue={addInput}>/</Button>
            </div>
            <div className='row'>
                <Clear buttonClear={() => setInput([])}>AC</Clear>
            </div>
        </div>
    )
}

export default Calculator