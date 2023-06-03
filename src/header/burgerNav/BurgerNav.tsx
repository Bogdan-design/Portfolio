import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {Link} from 'react-scroll'


export const BurgerNav = () => {

    const [menuOpen,setMenuOpen]=useState<boolean>(false)

    const menuOpenHandler = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className={s.burgerNav}>
            <div className={menuOpen? `${s.burgerNavItems} ${s.show}`: s.burgerNavItems}>
                <a href="#home">Home</a>
                <Link activeClass={s.active}
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      delay={0}>
                    Skills
                </Link>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </div>
            <div onClick={menuOpenHandler} className={s.burgerBtn}></div>
        </div>
    );
};

