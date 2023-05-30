import React from 'react';
import s from './Footer.module.scss'
import {Title} from "../common/componets/title/Title";
import linkedinIcon from "../assets/image/contacts/linkedin.svg";
import githubIcon from "../assets/image/contacts/github.svg";
import facebookIcon from "../assets/image/contacts/facebook.svg";
import telegramIcon from "../assets/image/contacts/telegram.svg";

type IconContactsType = {
    id: number
    img: string
}

export const Footer = () => {

    const iconsContact: IconContactsType[] = [
        {id: 0, img: linkedinIcon},
        {id: 1, img: githubIcon},
        {id: 2, img: facebookIcon},
        {id: 3, img: telegramIcon}
    ]

    return (
        <div className={s.footer}>
            <div className={s.container}>
                <Title text={'Bogdan Bochkovskyi'}/>
                <div className={s.nav}>
                    {iconsContact.map(k => {
                        return (
                            <div key={k.id} className={s.element}>
                                <a href="">
                                    <img src={k.img} alt=""/>
                                </a>
                            </div>
                        )
                    })
                    }
                </div>
                <h4 className={s.copyright}>2023 all rights reserved</h4>
            </div>
        </div>
    );
};

