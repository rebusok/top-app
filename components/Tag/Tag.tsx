import React from 'react';
import {TagProps} from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

const Tag = ({children, size = 'm',href, color = 'ghost', className, ...restProps}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.ghost]: color === 'ghost',
                [styles.red]: color === 'red',
                [styles.grey]: color === 'grey',
                [styles.green]: color === 'green',
                [styles.primary]: color === 'primary',
            })}
            {...restProps}
        >
            {href
                ? <a href={href}>{children}</a>
                : <>{children}</>}

        </div>
    );
};

export default Tag;