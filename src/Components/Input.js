import React from 'react'

const input = (props) => {
    return (
        <div>
            <label> <b>{props.labelName}</b> :&nbsp; 
                <input type='text' name={props.inputName}/>
            </label>
            <br/>
            <br/>
        </div>
    );
}

export default input;