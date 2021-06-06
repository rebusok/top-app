import styles from './Button.module.css';
import {ButtonProps} from "./Button.props";
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
export const Button = ({appearance, children, className, arrow = 'none', ...restProps}: ButtonProps): JSX.Element => {

    return (
        <button

            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            {...restProps}>
            {children}
            {arrow !== "none" && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
                [styles.right]: arrow === 'right'
            })}>
                <ArrowIcon/>
            </span>}
        </button>
    );
};