import {PtagProps} from "./Ptag.props";
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({children, size = 'M', ...restProps}: PtagProps): JSX.Element => {
    return (
      <p
          className={cn(styles.p, {
              [styles.l]: size === 'L',
              [styles.m]: size === 'M',
              [styles.s]: size === 'S'
          })}
          {...restProps}
      >
          {children}
      </p>
    );
}