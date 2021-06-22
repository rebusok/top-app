import React, {FC} from 'react';
import {InputProps} from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';
const Input:FC<InputProps> = ({className, ...restProps}) => {
    return (
        <input
            className={cn(className, styles.input)}
            {...restProps}
        />


    );
};

export default Input;