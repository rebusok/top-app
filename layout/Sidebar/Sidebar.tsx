import React from 'react';
import {SidebarProps} from './Sidebar.props';
import Menu from "../Menu/Menu";
import Logo from '../logo.svg';
import styles from './Sidebar.module.css';
import cn from 'classnames';
const Sidebar = ({className,...props}: SidebarProps): JSX.Element => {

    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <Logo className={styles.logo}/>
            <div>search</div>
            <Menu/>
        </div>
    );
};

export default Sidebar;