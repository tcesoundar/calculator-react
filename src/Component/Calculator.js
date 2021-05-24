import React, { Component } from 'react'

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstInput : '', 
            secondInput : '',
            result: ''
        }
    }

    handleFirstInput = value => {
        let {result} = this.state;

        if(value === '')
            result = ''
        
        this.setState({
        firstInput : value,
        result
        })
    }

    handleSecondInput = value => {
        let {result} = this.state;

        if(value === '')
            result = ''
    
        this.setState({
            secondInput : value,
            result
        })
    }

    add = () => {
        this.setState({
            result : parseInt(this.state.firstInput) + parseInt(this.state.secondInput)
        })
    }

    subtract = () => {
        this.setState({
            result : parseInt(this.state.firstInput) - parseInt(this.state.secondInput)
        })
    }

    divide = () => {
        this.setState({
            result : parseInt(this.state.firstInput) / parseInt(this.state.secondInput)
        })
    }

    multiply = () => {
        this.setState({
            result : parseInt(this.state.firstInput) * parseInt(this.state.secondInput)
        })
    }

    render() {

        const {firstInput, secondInput, result} = this.state

        const isDisabled = firstInput.length === 0 || secondInput.length === 0

        return (
            <div title='calculator'>

                <p><b>Calculator Application</b></p>
                <label>First Input : </label>
                <input title='firstInput' type='number' placeholder='0' value={firstInput} onChange={(e)  => this.handleFirstInput(e.target.value)}/>
                <br/>
                <br/>

                <label>Second Input : </label>
                <input title='secondInput' type='number' placeholder='0' value={secondInput} onChange={(e)  => this.handleSecondInput(e.target.value)}/>
                <br/>
                <br/>
 
                <input title='add' type='button' value='+' onClick={() => this.add()} disabled={isDisabled}/>
                <input title='subtract' type='button' value='-' onClick={() => this.subtract()} disabled={isDisabled}/>
                <input title='divide' type='button' value='/' onClick={() => this.divide()} disabled={isDisabled}/>
                <input title='multiply' type='button' value='*' onClick={() => this.multiply()} disabled={isDisabled}/>
                <br/>
                <br/>

                <label>Result : </label>
                <input title='result' type='text' placeholder='0' value= {result} readOnly/>

            </div>
        )
    }

}
