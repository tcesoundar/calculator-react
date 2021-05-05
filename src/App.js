import './App.css';
import React from 'react';
import CalulatorHeader from './Components/CalculatorHeader';
import Input from './Components/Input';
import CalculatorButton from './Components/CalculatorButton';
import Output from './Components/Output';

function App() {
  return (
    <div className='App'>
      
        <CalulatorHeader headerName='CALCULATOR APPLICATION'/>

        <Input labelName='First Input' inputName='firstName'/>

        <Input labelName='Second Input' inputName='secondName'/>

        <CalculatorButton symbol='+'/>
        &nbsp;

        <CalculatorButton symbol='-'/>
        &nbsp;

        <CalculatorButton symbol='*'/>
        &nbsp;

        <CalculatorButton symbol='/'/>
        <br/>
        <br/>

        <Output labelName='Results' outputName='results'/>

    </div>
  );
}

export default App;
