import React, {ForwardedRef, forwardRef} from 'react';
import {TextAreaProps} from "./TextArea.props";
import styles from './TextArea.module.css';
import cn from 'classnames';

const TextArea = forwardRef(({className, error, ...restProps}:TextAreaProps, ref:ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <div className={cn(className, styles.textAreaWrapper)}>
            <textarea
                className={cn(styles.textArea,  {
                    [styles.error]: error
                })}
                ref={ref}
                {...restProps}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

export default TextArea;