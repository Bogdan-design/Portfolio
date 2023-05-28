import React from 'react';
import s from './Footer.module.scss'
import sContainer from "../common/style/Container.module.scss";
import sTitle from '../skils/Skills.module.scss'
import {Title} from "../common/componets/title/Title";
import linkedinIcon from "../assets/image/contacts/linkedin.svg";
import githubIcon from "../assets/image/contacts/github.svg";
import facebookIcon from "../assets/image/contacts/facebook.svg";
import telegramIcon from "../assets/image/contacts/telegram.svg";

type IconContactsType = {
    id: number
    style: React.CSSProperties
}

export const Footer = () => {

    const iconsContact : IconContactsType[] = [
        {id:0,style: {backgroundImage: `url(${linkedinIcon})`}},
        {id:1,style: {backgroundImage: `url(${githubIcon})`}},
        {id:2,style: {backgroundImage: `url(${facebookIcon})`}},
        {id:3,style: {backgroundImage: `url(${telegramIcon})`}}
    ]

    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <Title text={'Bogdan Bochkovskyi'} />
                <div className={s.nav}>
                    {iconsContact.map(k=>{
                        return <button key={k.id} style={k.style} className={s.element}></button>
                    })
                    }
                </div>
                <h4 className={sTitle.title}>2023 all rights reserved</h4>
            </div>
        </div>
    );
};

