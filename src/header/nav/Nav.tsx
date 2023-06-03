import React from 'react';
import s from './Nav.module.scss'
import {Link} from 'react-scroll'


export const Nav = () => {

    return (
        <div className={s.nav}>
            <a href="#ome">Home</a>
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
    );
};

