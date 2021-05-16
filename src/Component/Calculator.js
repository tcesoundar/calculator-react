import React, { Component } from 'react'

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstInput : '', 
            secondInput : '',
            result: ''
        }

        this.handleFirstInput = this.handleFirstInput.bind(this)
        this.handleSecondInput = this.handleSecondInput.bind(this)

        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
        this.division = this.division.bind(this)
        this.multiply = this.multiply.bind(this)

    }

    handleFirstInput = e => this.setState({
        firstInput : e.target.value
    })

    handleSecondInput = e => this.setState({
        secondInput : e.target.value
    })

    add =  e => this.setState({
        result : parseInt(this.state.firstInput) + parseInt(this.state.secondInput)
    })

    sub =  e => this.setState({
        result : parseInt(this.state.firstInput) - parseInt(this.state.secondInput)
    })

    division =  e => this.setState({
        result : parseInt(this.state.firstInput) / parseInt(this.state.secondInput)
    })

    multiply =  e => this.setState({
        result : parseInt(this.state.firstInput) * parseInt(this.state.secondInput)
    })
    
    render() {

        const {firstInput, secondInput, result} = this.state

        const isDisabled = firstInput.length < 1 || secondInput.length < 1
        
        return (
            <div>

                <p><b>Calculator Application</b></p>
                <label>First Input : </label>
                <input name='firstInput' type='number' placeholder='0' value={firstInput} onChange={this.handleFirstInput}/>
                <br/>
                <br/>

                <label>Second Input : </label>
                <input name='secondInput' type='number' placeholder='0' value={secondInput} onChange={this.handleSecondInput}/>
                <br/>
                <br/>

                <input name='add' type='button' value='+' onClick={this.add} disabled={isDisabled}/>
                <input name='sub' type='button' value='-' onClick={this.sub} disabled={isDisabled}/>
                <input name='division' type='button' value='/' onClick={this.division} disabled={isDisabled}/>
                <input name='multiply' type='button' value='*' onClick={this.multiply} disabled={isDisabled}/>
                <br/>
                <br/>

                <label>Result : </label>
                <input name='result' type='text' placeholder='0' value= {result}/>

            </div>
        )
    }

}
