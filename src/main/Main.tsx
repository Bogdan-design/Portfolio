import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/style/Container.module.css'
import {Title} from "../common/componets/title/Title";

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <Title text={'I am Bogdan Bochkovskyi'} />
                    {/*<h1>I am Bogdan Bochkovskyi</h1>*/}
                    <p>Frontend Developer</p>
                </div>
                <div className={s.img}></div>
            </div>
        </div>
    );
};

