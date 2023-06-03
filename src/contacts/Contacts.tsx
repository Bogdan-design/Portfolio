import React from 'react';
import s from './Contacts.module.scss'
import {Title} from "../common/componets/title/Title";

export const Contacts = () => {
    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={s.container}>
                <Title text={'Contacts'}/>
                <form className={s.form} action="">
                    <input className={s.input} type="text" placeholder="Name"/>
                    <input className={s.input} type="text" placeholder="e-mail"/>
                    <textarea className={s.textarea} placeholder="Message"></textarea>
                    <button>send</button>
                </form>
            </div>
        </div>
    );
};

