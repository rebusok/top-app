import React, {FC} from 'react';
import {TextAreaProps} from "./TextArea.props";
import styles from './TextArea.module.css';
import cn from 'classnames';
const TextArea:FC<TextAreaProps> = ({className, ...restProps}) => {
    return (
        <textarea
            className={cn(className, styles.TextArea)}
            {...restProps}
        />
    );
};

export default TextArea;