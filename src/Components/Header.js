import React from 'react';

const header = (props) => {
    return (
        <div>
            <p> <b>{props.headerName}</b> </p>
            <br/>
        </div>
    );
}

export default header;