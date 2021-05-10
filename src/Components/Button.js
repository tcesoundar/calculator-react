import React from 'react';
import styles from './Button.module.css';

const button = (props) => {
    return (
        <input className={styles.button} type='button' value={props.symbol}/>
    )
}

export default button;