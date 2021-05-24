import React from 'react'

const input = (props) => {

    return (
        <div>
            <label> <b>{props.labelName}</b> :&nbsp; 
                <input type='number' name={props.inputName} placeholder={props.inputPlaceholder} value={props.inputValue} onChange={props.onChange}/>
            </label>
            <br/>
            <br/>
        </div>
    );
}

export default input;