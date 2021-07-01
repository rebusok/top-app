import React, {useEffect, useState} from 'react';
import {HeaderProps} from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Logo from '../logo.svg';
import {ButtonIcon} from "../../components";
import { motion } from 'framer-motion';
import Sidebar from "../Sidebar/Sidebar";
import {useRouter} from "next/router";


const Header = ({className, ...restProps}: HeaderProps): JSX.Element => {

    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        close: {
            opacity: 0,
            x: '100%',
        }
    };

    return (
        <header {...restProps} className={cn(styles.header, className)}>
            <Logo className={styles.logo}/>
            <ButtonIcon icon={'sort'} appearance={'white'} onClick={() => setIsOpened(true)}/>
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial={'close'}
                animate={isOpened ? 'opened' : 'close'}
            >
                <Sidebar/>
                <ButtonIcon className={styles.menuClose} icon={'close'} appearance={'white'} onClick={() => setIsOpened(false)}/>
            </motion.div>
        </header>
    );
};

export default Header;