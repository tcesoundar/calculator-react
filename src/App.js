import './App.css';
import React from 'react';
import Header from './Components/Header';
import Input from './Components/Input';
import Button from './Components/Button';
import Output from './Components/Output';

function App() {
  return (
    <div className='App'>
      
        <Header headerName='CALCULATOR APPLICATION'/>

        <Input labelName='First Input' inputName='firstName'/>

        <Input labelName='Second Input' inputName='secondName'/>

        <Button symbol='+'/>
        &nbsp;

        <Button symbol='-'/>
        &nbsp;

        <Button symbol='*'/>
        &nbsp;

        <Button symbol='/'/>
        <br/>
        <br/>

        <Output labelName='Results' outputName='results'/>

    </div>
  );
}

export default App;
