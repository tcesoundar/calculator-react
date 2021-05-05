import React from 'react'

const output = (props) => {
    return (
        <div>
            <label> <b>{props.labelName}</b> :&nbsp; 
                <input type='text' name={props.outputName}/>
            </label>
            <br/>
            <br/>
        </div>
    );
}

export default output;