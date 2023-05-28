import React from 'react';
import s from './Contacts.module.scss'
import sContainer from "../common/style/Container.module.scss";
import {Title} from "../common/componets/title/Title";
import {Button} from "../common/componets/button/Button";

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
                <Button name={'send'} />
            </div>
        </div>
    );
};

