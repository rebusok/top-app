import React from 'react';
import {HhDataProps} from "./hhData.props";
import {Card} from "../index";
import styles from './HhData.module.css';


const HhData = ( {count}: HhDataProps):JSX.Element => {
    return (
        <>
            <div className={styles.hh}>
                <Card className={styles.count}>
                    <div className={styles.title}>Всего вакансий</div>
                    <div className={styles.countValue}>{count}</div>
                </Card>
                <Card className={styles.salary}>
                    <div className={styles.title}>Всего вакансий</div>
                    <div className={styles.salaryValue}>{count}</div>
                    <div className={styles.rate}>{count}</div>
                </Card>
            </div>
        </>
    );
};

export default HhData;