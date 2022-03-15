import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import styles from './Profile.module.scss'
import { useForm } from "react-hook-form";
import { useState } from "react";

const Profile = (props:any) =>{
    const { register, handleSubmit } = useForm();
    const [disabled, setDisabled] = useState(true)
    return(
        <div className={styles.profile}>
            <div className={styles.profile__header}>
                <h1>Профиль пользователя</h1>
                <BlueButton className={styles.profile__button} onClick={()=>setDisabled(false)} title={'Редактировать'}/>
            </div>
            <form className={styles.form}>
                <p className={styles.form__label}>Name</p>
                <input className={styles.form__input} defaultValue={props.element.name} {...register('name',{
                    disabled:disabled,
                    required: true
                })} />
                <p className={styles.form__label}>User name</p>
                <input className={styles.form__input} {...register('userName',{
                    disabled:disabled,
                    required: true
                })} defaultValue={props.element.userName}/>
                <p className={styles.form__label}>E-mail</p>
                <input className={styles.form__input} {...register('email',{
                    disabled:disabled,
                    required: true
                }
                )} defaultValue={props.element.email}/>
                <p className={styles.form__label}>Street</p>
                <input className={styles.form__input} {...register('street',{
                    disabled: disabled,
                    required: true
                })} defaultValue={props.element.addressStreet}/>
                <p className={styles.form__label}>City</p>
                <input className={styles.form__input} {...register('city',{
                    disabled:disabled,
                    required: true
                })} defaultValue={props.element.addressCity}/>
                <p className={styles.form__label}>Zip code</p>
                <input className={styles.form__input} {...register('zipCode',{
                    disabled:disabled,
                    required: true
                })} defaultValue={props.element.addressZipcode}/>
                <p className={styles.form__label}>Phone</p>
                <input className={styles.form__input} {...register('phone',{
                    disabled:disabled,
                    required: true
                })} defaultValue={props.element.phone}/>
                <p className={styles.form__label}>Website</p>
                <input className={styles.form__input} {...register('website',{
                    disabled:disabled,
                    required: true
                })} defaultValue={props.element.website}/>
                <p className={styles.form__label}>Comment</p>
                <textarea className={styles.form__textarea} {...register("Comment",{
                    disabled:disabled
                })} placeholder="About you" />
                <input className={styles.form__button} type='submit' disabled={disabled}/>
            </form>
        </div>
    )
}

export default Profile