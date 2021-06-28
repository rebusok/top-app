import React, {ForwardedRef, forwardRef} from 'react';
import styles from './Card.module.css';
import {CardProps} from "./Card.props";
import cn from 'classnames';

const Card = forwardRef(({color='white', className,children, ...restProps}:CardProps, ref:ForwardedRef<HTMLDivElement>):JSX.Element => {
    return (
        <div ref={ref} className={cn(className,styles.card, {
            [styles.blue] : color === 'blue'
        })} {...restProps}>
            {children}
        </div>
    );
});

export default Card;