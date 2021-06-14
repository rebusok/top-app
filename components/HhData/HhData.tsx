import React from 'react';
import {HhDataProps} from "./hhData.props";
import {Card} from "../index";
import styles from './HhData.module.css';
import StarIcon from './star.svg';
import {priceRu} from "../../helpers/helpers";


const HhData = ( {count, juniorSalary, middleSalary, seniorSalary}: HhDataProps):JSX.Element => {
    return (
        <>
            <div className={styles.hh}>
                <Card className={styles.count}>
                    <div className={styles.title}>Всего вакансий</div>
                    <div className={styles.countValue}>{count}</div>
                </Card>
                <Card className={styles.salary}>
                    <div>
                        <div className={styles.title}>Начальный</div>
                        <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                        <div className={styles.rate}>
                            <StarIcon className={styles.filled}/>
                            <StarIcon/>
                            <StarIcon/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.title}>Средний</div>
                        <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                        <div className={styles.rate}>
                            <StarIcon className={styles.filled}/>
                            <StarIcon className={styles.filled}/>
                            <StarIcon/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.title}>Профисионнал</div>
                        <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                        <div className={styles.rate}>
                            <StarIcon className={styles.filled}/>
                            <StarIcon className={styles.filled}/>
                            <StarIcon className={styles.filled}/>
                        </div>
                    </div>

                </Card>
            </div>
        </>
    );
};

export default HhData;