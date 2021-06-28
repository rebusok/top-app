import React, {useState} from 'react';
import {ReviewFormProps} from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import {Button, Input, Rating, TextArea} from "../index";
import CloseIcon from './close.svg';
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSendResponse} from "./ReviewForm.interface";
import axios from "axios";
import {API} from "../../helpers/api/Api";

const ReviewForm = ({productId, className, ...restProps}: ReviewFormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>();
    const onSubmit = async (FormData: IReviewForm) => {

        try {
            const {data} = await axios.post<IReviewSendResponse>(API.review.createDemo, {...FormData, productId});
            if (data.message) {
                setIsSuccess(true);
                setIsError('');
                reset();
            } else {
                setIsSuccess(false);
                setIsError('Что-то пошло не так');
            }
        } catch (e) {
            setIsError(e.message);
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...restProps}>
                <Input {...register('name', {required: {value: true, message: 'Заполните имя'}})}
                       placeholder={'Имя'}
                       error={errors.name}
                />
                <Input
                    {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
                    className={styles.title}
                    placeholder={'Заголовок отзыва'}
                    error={errors.title}

                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name={'rating'}
                        rules={{required: {value: true, message: 'Выставите оценку'}}}
                        render={({field}) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                            />
                        )}
                    />
                </div>
                <TextArea {...register('description', {required: {value: true, message: 'Заполните текс отзыва'}})}
                          className={styles.description}
                          placeholder={'Текст отзыва'}
                          error={errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance={'primary'}>
                        Отправить
                    </Button>
                    <span className={styles.info}>
                    * Перед публикацией отзыв пройдет предварительную модерацию и проверку
                </span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.success, styles.panel)}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, ваш отзыв будет опублекован после проверки</div>
                <CloseIcon className={styles.close} onClick={() =>  setIsSuccess(false)}/>
            </div>}
            {isError && <div className={cn(styles.error, styles.panel)}>
                Что-то пошло не так, попробуйте обновить страницу
                <CloseIcon className={styles.close} onClick={() => setIsError(undefined)}/>
            </div>}
        </form>
    );
};

export default ReviewForm;