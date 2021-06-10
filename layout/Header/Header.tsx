import React from 'react';
import {HeaderProps} from './Header.props';
import styles from './Header.module.css';
const Header = ({...restProps}: HeaderProps): JSX.Element => {
    return (
        <div {...restProps} className={styles.header}>
        </div>
    );
};

export default Header;