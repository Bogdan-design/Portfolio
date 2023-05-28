import React from 'react';
import s from './Remote.module.scss'
import sContainer from '../common/style/Container.module.scss'
import {Title} from "../common/componets/title/Title";
import {Button} from "../common/componets/button/Button";



export const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteContainer}`}>
                <Title text={'Remote work'} />
                <Button  name={'employ me'}/>
            </div>
        </div>
    );
};

