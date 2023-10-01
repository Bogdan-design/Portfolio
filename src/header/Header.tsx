import React from 'react';
import s from './Header.module.scss'
import {BurgerNav} from "header/burgerNav/BurgerNav";
import {Nav} from "header/nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};

