import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import styles from './Profile.module.scss'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { mapStateToPropsType } from "./ProfileContainer";

type PropsType = mapStateToPropsType

const Profile: React.FC<PropsType> = (props) =>{
    const { register, handleSubmit, formState:{errors} } = useForm();
    const [disabled, setDisabled] = useState(true)
    return(
        <div className={styles.profile}>
            <div className={styles.profile__header}>
                <h1 className={styles.profile__title}>Профиль пользователя</h1>
                <BlueButton className={styles.profile__button} onClick={()=>setDisabled(false)} title={'Редактировать'}/>
            </div>
            <form className={styles.form} onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}>
                <div className={styles.form__container}>
                    <p className={styles.form__label}>Name</p>
                    <input className={(errors.name? styles.form__input_error : styles.form__input)} defaultValue={props.element.name} {...register('name',{
                        disabled:disabled,
                        required: true
                    })} />
                    <p className={styles.form__label}>User name</p>
                    <input className={(errors.userName? styles.form__input_error : styles.form__input)} {...register('userName',{
                        disabled:disabled,
                        required: true
                    })} defaultValue={props.element.userName}/>
                    <p className={styles.form__label}>E-mail</p>
                    <input type ='email' className={(errors.email? styles.form__input_error : styles.form__input)} {...register('email',{
                        pattern:{
                            value: /^([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})$/,
                            message:''
                        },
                        disabled:disabled,
                        required: true
                    }
                    )} defaultValue={props.element.email}/>
                    <p className={styles.form__label}>Street</p>
                    <input className={(errors.street? styles.form__input_error : styles.form__input)} {...register('street',{
                        disabled: disabled,
                        required: true
                    })} defaultValue={props.element.addressStreet}/>
                    <p className={styles.form__label}>City</p>
                    <input className={(errors.city? styles.form__input_error : styles.form__input)} {...register('city',{
                        disabled:disabled,
                        required: true
                    })} defaultValue={props.element.addressCity}/>
                    <p className={styles.form__label}>Zip code</p>
                    <input className={(errors.zipCode? styles.form__input_error : styles.form__input)} {...register('zipCode',{
                        disabled:disabled,
                        required: true
                    })} defaultValue={props.element.addressZipcode}/>
                    <p className={styles.form__label}>Phone</p>
                    <input type='tel' className={(errors.phone? styles.form__input_error : styles.form__input)} {...register('phone',{
                        pattern:{
                            value: /^([\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2})$/,
                            message:''
                        },
                        disabled:disabled,
                        required: true
                    })} defaultValue={props.element.phone}/>
                    <p className={styles.form__label}>Website</p>
                    <input className={(errors.website? styles.form__input_error : styles.form__input)} {...register('website',{
                        disabled:disabled,
                        required: true
                    })} defaultValue={props.element.website}/>
                    <p className={styles.form__label}>Comment</p>
                    <textarea className={styles.form__textarea} {...register("Comment",{
                        disabled:disabled
                    })} placeholder="Comment" />
                </div>
                <input className={styles.form__button} type='submit' disabled={disabled}/>
            </form>
        </div>
    )
}

export default Profile