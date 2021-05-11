import React, { Component } from 'react'

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1 : '', 
            value2 : '',
            res: ''
        }

        this.handleValue1 = this.handleValue1.bind(this)
        this.handleValue2 = this.handleValue2.bind(this)

        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
        this.division = this.division.bind(this)
        this.multiply = this.multiply.bind(this)
    
    }

    handleValue1 = e => this.setState({
        value1 : e.target.value
    })

    handleValue2 = e => this.setState({
        value2 : e.target.value
    })

    add =  e => this.setState({
        res : parseInt(this.state.value1) + parseInt(this.state.value2)
    })

    sub =  e => this.setState({
        res : parseInt(this.state.value1) - parseInt(this.state.value2)
    })

    division =  e => this.setState({
        res : parseInt(this.state.value1) / parseInt(this.state.value2)
    })

    multiply =  e => this.setState({
        res : parseInt(this.state.value1) * parseInt(this.state.value2)
    })

    render() {
        return (
            <div>

                <p><b>Calculator Application</b></p>
                <label>First Input : </label>
                <input name='firstInput' type='number' placeholder='0' value={this.state.value1} onChange={this.handleValue1}/>
                <br/>
                <br/>

                <label>Second Input : </label>
                <input name='secondInput' type='number' placeholder='0' value={this.state.value2} onChange={this.handleValue2}/>
                <br/>
                <br/>

                <input name='add' type='button' value='+' onClick={this.add}/>
                <input name='sub' type='button' value='-' onClick={this.sub}/>
                <input name='div' type='button' value='/' onClick={this.division}/>
                <input name='multiply' type='button' value='*' onClick={this.multiply}/>
                <br/>
                <br/>

                <label>Result : </label>
                <input name='result' type='number' value={this.state.res}/>

            </div>
        )
    }

}
