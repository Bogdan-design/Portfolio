import React from 'react';
import s from './Footer.module.css'
import sContainer from "../common/style/Container.module.css";
import sTitle from '../skils/Skills.module.css'
import {Title} from "../common/componets/title/Title";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <Title text={'Bogdan Bochkovskyi'} />
                <div className={s.nav}>
                    <span className={s.element}></span><span className={s.element}></span><span
                    className={s.element}></span><span className={s.element}></span>
                </div>
                <h4 className={sTitle.title}>2023 all rights reserved</h4>
            </div>
        </div>
    );
};

