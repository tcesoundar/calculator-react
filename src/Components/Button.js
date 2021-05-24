import React from 'react';
import styles from './Button.module.css';

const button = (props) => {
    return (
        <input className={styles.button} type='button' value={props.symbol} onClick={props.onClick} disabled={props.disabled}/>
    )
}

export default button;