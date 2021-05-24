import React, { useState } from 'react';

import Header from './Header';
import Input from './Input';
import Button from './Button'
import Output from './Output';
const Calculator = () => {

    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [result, setResult] = useState('');
    // const [operator, setOperator] = useState('');

    // const handleFirstInput = value => {
    //      if(value === '')
    //         setResult('')

    //     setFirstInput(value)
    //     setResult(result)
    // }

    // const handleSecondInput = value => {
    //     if(value === '')
    //         setResult('')

    //     setSecondInput(value)
    //     setResult(result)
    // }

    const add = () => {
        // setOperator('+')
        setResult(parseInt(firstInput) + parseInt(secondInput))
    }

    const subtract = () => {
        // setOperator('-')
        setResult(parseInt(firstInput) - parseInt(secondInput))
    }

    const multiply = () => {
        // setOperator('*')
        setResult(parseInt(firstInput) * parseInt(secondInput))
    }

    const divide = () => {
        // setOperator('/')
        setResult(parseInt(firstInput) / parseInt(secondInput))
    }

    const isDisable = firstInput.length === 0 || secondInput.length === 0

    return(

        <div title='calculator'>

            <Header headerName='CALCULATOR APPLICATION'/>

            {/* <Input labelName='First Input' inputName='firstName' inputPlaceholder='0' inputValue={firstInput} onChange={(e) => handleFirstInput(e.target.value)}/>

            <Input labelName='Second Input' inputName='secondName' inputPlaceholder='0' inputValue={secondInput} onChange={(e) => handleSecondInput(e.target.value)}/> */}

            <Input labelName='First Input' inputName='firstName' inputPlaceholder='0' inputValue={firstInput} onChange={(e) => setFirstInput(e.target.value)}/>

            <Input labelName='Second Input' inputName='secondName' inputPlaceholder='0' inputValue={secondInput} onChange={(e) => setSecondInput(e.target.value)}/>

            <Button symbol='+' onClick={() => add()} disabled={isDisable}/>
            &nbsp;

            <Button symbol='-' onClick={() => subtract()} disabled={isDisable}/>
            &nbsp;

            <Button symbol='*' onClick={() => multiply()} disabled={isDisable}/>
            &nbsp;

            <Button symbol='/' onClick={() => divide()} disabled={isDisable}/>
            <br/>
            <br/>

            {/* <Output labelName='Results' outputName='results' outputPlaceholder='0' outputValue={firstInput + operator + secondInput + "=" +result}/> */}

            <Output labelName='Results' outputName='results' outputPlaceholder='0' outputValue={result}/>

        </div>
    )
}

export default Calculator;