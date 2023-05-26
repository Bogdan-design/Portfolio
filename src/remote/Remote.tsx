import React from 'react';
import s from './Remote.module.css'
import sContainer from '../common/style/Container.module.css'
import {Title} from "../common/componets/title/Title";


export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteContainer}`}>
                <Title text={'Remote work'} />
                <button className={s.remoteButton}>employ me</button>
            </div>
        </div>
    );
};

