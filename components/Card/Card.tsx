import React from 'react';
import styles from './Card.module.css';
import {CardProps} from "./Card.props";
import cn from 'classnames';

const Card = ({color='white', className,children, ...restProps}:CardProps):JSX.Element => {
    return (
        <div className={cn(className,styles.card, {
            [styles.blue] : color === 'blue'
        })} {...restProps}>
            {children}
        </div>
    );
};

export default Card;