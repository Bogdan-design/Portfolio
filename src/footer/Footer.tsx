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
    link?:string
}

export const Footer = () => {

    const iconsContact: IconContactsType[] = [
        {id: 0, img: linkedinIcon,link:'https://www.linkedin.com/in/bogdan-bochkovskyi-6288a2193/'},
        {id: 1, img: githubIcon,link:'https://github.com/Bogdan-design'},
        {id: 2, img: facebookIcon,link:'https://www.facebook.com/bogdan.bochkovskiy'},
        {id: 3, img: telegramIcon,link:'https://web.telegram.org/k/#-1242637873'}
    ]

    return (
        <div className={s.footer}>
            <div className={s.container}>
                <Title text={'Bogdan Bochkovskyi'}/>
                <div className={s.nav}>
                    {iconsContact.map(k => {
                        return (
                            <div key={k.id} className={s.element}>
                                <a href={k.link}>
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

