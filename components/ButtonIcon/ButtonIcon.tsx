import React from 'react';
import {ButtonIconProps, icons} from './ButtonIcon.props';
import cn from 'classnames';
import styles from './ButtonIcon.module.css';
export const ButtonIcon = ({className,appearance, icon, ...restProps}: ButtonIconProps): JSX.Element => {

    const IconComp = icons[icon];
    return (
        <button className={cn(className, styles.button, {
            [styles.primary]: appearance === 'primary',
            [styles.white]: appearance === 'white',
        })} {...restProps}>
            <IconComp/>
        </button>
    );
};

