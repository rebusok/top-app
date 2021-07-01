import React, {ForwardedRef, forwardRef, useRef, useState} from 'react';
import {ProductProps} from "./Product.props";
import styles from './Product.module.css';
import {Button, Card, Divider, Rating, Review, ReviewForm, Tag} from "../index";
import {devOfNum, priceRu} from "../../helpers/helpers";
import Image from "next/image";
import cn from 'classnames';
import {motion} from 'framer-motion';

const Product = motion(forwardRef(({
                                       product,
                                       className,
                                       ...restProps
                                   }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible: {opacity: 1, height: 'auto'},
        hidden: {opacity: 0, height: 0}
    };

    const scrollToReview = () => {
        setIsReviewOpen(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    return (
        <div className={className} {...restProps} ref={ref}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice &&
                    <Tag className={styles.oldPrice} color={'green'}>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>
                    {priceRu(product.credit)}/
                    <span className={styles.month}>мес</span>
                </div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} key={c}
                                                                               color={'ghost'}>{c}</Tag>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div
                    className={styles.rateTitle}><a href={'#ref'}
                                                    onClick={scrollToReview}>{product.reviewCount} {devOfNum(product.reviewCount, ['отзыв', "отзыва", "отзывов"])}</a>
                </div>
                <Divider className={styles.hr}/>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}/>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}

                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)}/>
                <div className={styles.actions}>
                    <Button appearance={'primary'}>Узнать подробнее</Button>
                    <Button
                        appearance={'ghost'}
                        arrow={isReviewOpen ? 'down' : 'right'}
                        className={styles.reviewBtn}
                        onClick={() => setIsReviewOpen(!isReviewOpen)}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <motion.div variants={variants} initial={'hidden'} animate={isReviewOpen ? 'visible' : 'hidden'}>
                <Card color={'blue'} className={styles.review} ref={reviewRef}>
                    {product.reviews.map(r => (
                        <div key={r._id}>
                            <Review review={r}/>
                            <Divider/>
                        </div>
                    ))}
                    <ReviewForm productId={product._id}/>
                </Card>
            </motion.div>
        </div>
    );
}));

export default Product;