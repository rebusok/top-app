import React, {FC} from 'react';
import {DividerProps} from "./Divider.props";
import styles from './Divider.module.css';
import cn from 'classnames';
const Divider:FC<DividerProps> = ({className, ...restProps}) => {
    return (
        <hr
            className={cn(className, styles.hr)}
            {...restProps}/>

    );
};

export default Divider;