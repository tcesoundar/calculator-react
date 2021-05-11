import React, { Component } from 'react'

export default class Calculator extends Component {

   
    render() {
        return (
            <div>
                <label>First Input : </label>
                <input name='firstInput' type='text'/>

                <label>Second Input : </label>
                <input name='secondInput' type='text'/>


            </div>
        )
    }

    

}
