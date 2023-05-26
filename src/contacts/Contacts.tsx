import React from 'react';
import s from './Contacts.module.css'
import sContainer from "../common/style/Container.module.css";
import {Title} from "../common/componets/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'} />
                <form className={s.form} action="">
                    <input className={s.input} type="text" />
                    <input className={s.input} type="text" />
                    <textarea className={s.textarea} name="" ></textarea>
                </form>
                <button type="submit" className={s.contactsButton}>send</button>
            </div>
        </div>
    );
};

