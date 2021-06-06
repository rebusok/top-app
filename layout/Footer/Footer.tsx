import React from 'react';
import {FooterProps} from './Footer.props';
import styles from './Footer.module.css';
const Footer = ({...restProps}: FooterProps): JSX.Element => {
    return (
        <div {...restProps}>
            FOOTER
        </div>
    );
};

export default Footer;